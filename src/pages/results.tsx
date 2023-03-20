import MainContainer from '@components/UI/MainContainer/MainContainer';
import Grid from '@components/UI/Grid/Grid';
import Row from '@components/UI/Grid/Row';
import Column from '@components/UI/Grid/Column';
import Route from '@components/Route/Route';
import Button from '@components/UI/Button/Button';
import { TextBold, TextCentered } from '@components/UI/Texts/Texts';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import theme from '@themes/default';
import dayjs from 'dayjs';
import axios from 'axios';
import endpoints from '@data/endpoints';
import Loading from '@components/UI/Loading/Loading';
import Text from '@components/UI/Texts/Texts';
import { Destination } from '@dataTypes/types';

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [date, setDate] = useState<string | null>(null);
  const [passengers, setPassengers] = useState<number | null>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (router.query.date && dayjs(router.query.date as string, theme.dateFormat).isValid()) {
      setDate(
        dayjs(router.query.date as string, theme.dateFormat).format(theme.alternativeDateFormat)
      );
    }

    if (router.query.passengers && Number(router.query.passengers) > 0) {
      setPassengers(Number(router.query.passengers));
    }

    const query = router.query.destinations as string;

    if (!query) {
      setError(true);
      return;
    }

    axios
      .post(endpoints.destinations, {
        params: {
          query
        }
      })
      .then((response) => {
        const { data } = response;
        setDestinations(data);
        setTotalDistance(
          data.reduce(
            (acc: number, destination: Destination) => acc + (destination.distance || 0),
            0
          )
        );
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, [router]);

  const backButtonClickHandler = () => {
    router.push('/');
  };

  let results = <Loading />;

  if (destinations.length) {
    results = (
      <Grid>
        <Row>
          <Column>
            <Route length={destinations.length} data={destinations} />
          </Column>
        </Row>
        <Row>
          <Column>
            <TextCentered>
              <TextBold>{(totalDistance / 1000).toFixed(2)} km</TextBold> is total distance
            </TextCentered>
            {passengers && (
              <TextCentered>
                <TextBold>{passengers}</TextBold> passengers
              </TextCentered>
            )}
            {date && (
              <TextCentered>
                <TextBold>{date}</TextBold>
              </TextCentered>
            )}
          </Column>
        </Row>
        <Row>
          <Column>
            <Button onClick={backButtonClickHandler}>Back</Button>
          </Column>
        </Row>
      </Grid>
    );
  }

  if (error) {
    results = (
      <Grid>
        <Row>
          <Text>
            <TextBold>Oops! Something went wrong!</TextBold>
          </Text>
        </Row>
        <Row>
          <Button onClick={backButtonClickHandler}>Back</Button>
        </Row>
      </Grid>
    );
  }

  return <MainContainer>{results}</MainContainer>;
}

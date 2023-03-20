import {
  AdjustedBubble,
  AdjustedCircle,
  AdjustedText,
  RouteCity,
  RouteContainer
} from '@components/Route/Route.styles';
import Pin from '@components/UI/Pin/Pin';
import Path from '@components/UI/Path/Path';

interface Props {
  length: number;
  forInputs?: boolean;
  data?: {
    city: string;
    distance?: number;
  }[];
}

const Route = ({ length, forInputs, data }: Props) => {
  return (
    <RouteContainer $forInputs={forInputs}>
      {[...Array(length)].map((_, index) => (
        <RouteCity key={index} $last={index === length - 1} $forInputs={forInputs}>
          {index < length - 1 ? (
            <>
              <AdjustedCircle />
              <Path />
              {data && data[index] && data[index].distance && (
                <AdjustedBubble>{(data[index].distance! / 1000).toFixed(2)} km</AdjustedBubble>
              )}
            </>
          ) : (
            <Pin />
          )}
          {data && data[index] && <AdjustedText>{data[index].city}</AdjustedText>}
        </RouteCity>
      ))}
    </RouteContainer>
  );
};

export default Route;

import { AdjustedCircle, RouteCity, RouteContainer } from '@components/Route/Route.styles';
import Pin from '@components/UI/Pin/Pin';
import Path from '@components/UI/Path/Path';

interface Props {
  length: number;
  forInputs?: boolean;
}

const Route = ({ length, forInputs }: Props) => {
  return (
    <RouteContainer>
      {[...Array(length)].map((_, index) => (
        <RouteCity key={index} $last={index === length - 1}>
          {index < length - 1 ? (
            <>
              <AdjustedCircle />
              <Path />
            </>
          ) : (
            <Pin />
          )}
        </RouteCity>
      ))}
    </RouteContainer>
  );
};

export default Route;

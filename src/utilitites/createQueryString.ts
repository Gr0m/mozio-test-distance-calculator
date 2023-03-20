import { InputsData, QueryString } from '@dataTypes/types';

const createQueryString = (
  destinations: InputsData[],
  passengers: InputsData<number>,
  date: InputsData
): QueryString => {
  return {
    destinations: destinations.map((destination) => destination.value.toLowerCase()).join(','),
    passengers: passengers.value,
    date: date.value
  };
};

export default createQueryString;

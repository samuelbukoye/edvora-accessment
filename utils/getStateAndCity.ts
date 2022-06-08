import { RideType } from './types';

const getStateAndCity = ({
  rides,
  state,
  city,
}: {
  rides: RideType[];
  state: string;
  city: string;
}) => {
  const states: string[] = [];
  const cities: string[] = [];

  rides.forEach((ride) => {
    if (states.indexOf(ride.state) === -1) {
      states.push(ride.state);
    }

    if (state) {
      if (ride.state === state && cities.indexOf(ride.city) === -1) {
        cities.push(ride.city);
      }
    } else if (cities.indexOf(ride.city) === -1) {
      cities.push(ride.city);
    }
  });
  console.log({ states, cities });

  return { states, cities };
};

export default getStateAndCity;

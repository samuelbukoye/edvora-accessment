import { RideType } from './types';

const filters = ({
  rides,
  filter,
  state,
  city,
}: {
  rides: RideType[];
  filter: 'ASC' | 'DESC';
  state: string;
  city: string;
}) => {
  const now = new Date().getTime();

  const filteredRides = rides.filter((ride) => {
    const rideDate = new Date(ride.date).getTime();
    const filterByState: boolean = state ? ride.state === state : !state;
    const filterByCity = city ? ride.city === city : !city;

    return filter === 'ASC'
      ? rideDate >= now && filterByState && filterByCity
      : rideDate < now && filterByState && filterByCity;
  });

  return filteredRides;
};

export default filters;

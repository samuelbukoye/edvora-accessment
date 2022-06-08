import { RideTypeWithDistance } from './types';

const filterByDate = ({
  rides,
  filter,
}: {
  rides: RideTypeWithDistance[];
  filter: 'ASC' | 'DESC';
}) => {
  const now = new Date().getTime();

  const filteredRides = rides.filter((ride) => {
    const rideDate = new Date(ride.date).getTime();

    return filter === 'ASC' ? rideDate >= now : rideDate < now;
  });

  return filteredRides;
};

export default filterByDate;

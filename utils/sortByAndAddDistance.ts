import calcDistance from './calcDistance';
import { RideType, RideTypeWithDistance } from './types';

const sortByAndAddDistance = ({
  rides,
  station_code,
}: {
  rides: RideType[];
  station_code: number;
}) => {
  const newRides: RideTypeWithDistance[] = rides.map((ride) => ({
    ...ride,
    distance: calcDistance({
      codeArray: ride.station_path,
      station_code,
    }),
  }));

  newRides.sort((first, second) => first.distance - second.distance);

  return newRides;
};

export default sortByAndAddDistance;

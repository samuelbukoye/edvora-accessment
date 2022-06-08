import calcDistance from './calcDistance';
import { RideType, RideTypeWithDistance } from './types';

const sortByAndAddDistanceAndFilter = ({
  rides,
  station_code,
  state,
  city,
}: {
  rides: RideType[];
  station_code: number;
  state: string;
  city: string;
}) => {
  const newRides: RideTypeWithDistance[] = rides.map((ride) => ({
    ...ride,
    distance: calcDistance({
      codeArray: ride.station_path,
      station_code,
    }),
  }));

  newRides.sort((first, second) => first.distance - second.distance);

  const filteredRides = newRides.filter((ride) => {
    const filterByState: boolean = state ? ride.state === state : !state;
    const filterByCity = city ? ride.city === city : !city;

    return filterByState && filterByCity;
  });

  return filteredRides;
};

export default sortByAndAddDistanceAndFilter;

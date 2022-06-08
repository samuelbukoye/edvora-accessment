export interface RideType {
  id: number;
  origin_station_code: number;
  station_path: number[];
  destination_station_code: number;
  date: string;
  map_url: string;
  state: string;
  city: string;
}

export interface RideTypeWithDistance extends RideType {
  distance: number;
}

export interface UserType {
  station_code: number;
  name: string;
  url: string;
}

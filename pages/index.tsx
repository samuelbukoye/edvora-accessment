import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import RideCard from '../components/RideCard';
import filterByDate from '../utils/filterByDate';
import getStateAndCity from '../utils/getStateAndCity';
import sortByAndAddDistanceAndFilter from '../utils/sortByAndAddDistanceAndFilter';
import {
  RideType,
  RideTypeWithDistance,
  RouteType,
  UserType,
} from '../utils/types';

const rides: RideType[] = [
  {
    id: 961,
    origin_station_code: 9,
    station_path: [66, 73, 88],
    destination_station_code: 93,
    date: '04/06/2022 06:27 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Nagaland',
    city: 'Dimapur',
  },
  {
    id: 233,
    origin_station_code: 15,
    station_path: [40, 56, 67, 70, 83],
    destination_station_code: 91,
    date: '02/07/2022 02:49 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Himachal Pradesh',
    city: 'Mandi',
  },
  {
    id: 250,
    origin_station_code: 7,
    station_path: [69, 79, 87],
    destination_station_code: 99,
    date: '02/21/2022 11:27 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Gujarat',
    city: 'Patan',
  },
  {
    id: 491,
    origin_station_code: 9,
    station_path: [39, 47, 54, 68, 77, 85],
    destination_station_code: 97,
    date: '03/31/2022 06:31 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Goa',
    city: 'Marmagao',
  },
  {
    id: 720,
    origin_station_code: 13,
    station_path: [28, 31, 48, 55, 69, 71, 87],
    destination_station_code: 97,
    date: '03/13/2022 03:37 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Manipur',
    city: 'Lilong',
  },
  {
    id: 948,
    origin_station_code: 17,
    station_path: [64, 71, 86],
    destination_station_code: 95,
    date: '03/07/2022 09:16 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Assam',
    city: 'Goalpara',
  },
  {
    id: 471,
    origin_station_code: 7,
    station_path: [57, 63, 79, 87],
    destination_station_code: 99,
    date: '02/21/2022 08:34 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Mizoram',
    city: 'Saiha',
  },
  {
    id: 565,
    origin_station_code: 2,
    station_path: [64, 72, 83],
    destination_station_code: 91,
    date: '03/03/2022 03:40 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Dadra and Nagar Haveli',
    city: 'Silvassa',
  },
  {
    id: 203,
    origin_station_code: 9,
    station_path: [47, 57, 67, 77, 88],
    destination_station_code: 94,
    date: '03/28/2022 08:43 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Gujarat',
    city: 'Kadi',
  },
  {
    id: 756,
    origin_station_code: 3,
    station_path: [25, 39, 48, 58, 68, 75, 83],
    destination_station_code: 96,
    date: '03/14/2022 07:52 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Gujarat',
    city: 'Valsad',
  },
  {
    id: 303,
    origin_station_code: 10,
    station_path: [69, 72, 84],
    destination_station_code: 94,
    date: '02/15/2022 09:10 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Andaman and Nicobar Islands',
    city: 'Port Blair',
  },
  {
    id: 755,
    origin_station_code: 12,
    station_path: [34, 49, 50, 65, 70, 85],
    destination_station_code: 93,
    date: '03/24/2022 05:53 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Madhya Pradesh',
    city: 'Pipariya',
  },
  {
    id: 358,
    origin_station_code: 12,
    station_path: [39, 46, 54, 60, 72, 83],
    destination_station_code: 99,
    date: '02/27/2022 08:45 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Chhattisgarh',
    city: 'Raipur',
  },
  {
    id: 832,
    origin_station_code: 15,
    station_path: [55, 68, 76, 89],
    destination_station_code: 96,
    date: '03/04/2022 07:19 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Nagaland',
    city: 'Tuensang',
  },
  {
    id: 625,
    origin_station_code: 3,
    station_path: [32, 41, 55, 63, 75, 86],
    destination_station_code: 96,
    date: '04/06/2022 05:28 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Nagaland',
    city: 'Dimapur',
  },
  {
    id: 973,
    origin_station_code: 15,
    station_path: [63, 70, 85],
    destination_station_code: 95,
    date: '03/27/2022 08:24 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Delhi',
    city: 'New Delhi',
  },
  {
    id: 206,
    origin_station_code: 14,
    station_path: [56, 67, 75, 81],
    destination_station_code: 94,
    date: '02/15/2022 04:15 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Arunachal Pradesh',
    city: 'Naharlagun',
  },
  {
    id: 172,
    origin_station_code: 6,
    station_path: [66, 75, 82],
    destination_station_code: 95,
    date: '02/17/2022 05:03 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Delhi',
    city: 'New Delhi',
  },
  {
    id: 511,
    origin_station_code: 13,
    station_path: [31, 48, 59, 62, 79, 81],
    destination_station_code: 97,
    date: '03/05/2022 07:06 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Haryana',
    city: 'Rania',
  },
  {
    id: 891,
    origin_station_code: 15,
    station_path: [43, 51, 67, 75, 89],
    destination_station_code: 98,
    date: '04/04/2022 10:03 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Andaman and Nicobar Islands',
    city: 'Port Blair',
  },
  {
    id: 618,
    origin_station_code: 4,
    station_path: [61, 75, 86],
    destination_station_code: 95,
    date: '04/02/2022 05:33 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Bihar',
    city: 'Forbesganj',
  },
  {
    id: 474,
    origin_station_code: 18,
    station_path: [41, 57, 67, 70, 87],
    destination_station_code: 98,
    date: '03/07/2022 12:37 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Andhra Pradesh',
    city: 'Pithapuram',
  },
  {
    id: 544,
    origin_station_code: 2,
    station_path: [37, 42, 51, 60, 75, 88],
    destination_station_code: 98,
    date: '03/10/2022 12:19 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Jammu and Kashmir',
    city: 'Srinagar',
  },
  {
    id: 820,
    origin_station_code: 11,
    station_path: [56, 62, 70, 84],
    destination_station_code: 90,
    date: '03/15/2022 08:03 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Nagaland',
    city: 'Zunheboto',
  },
  {
    id: 814,
    origin_station_code: 18,
    station_path: [36, 45, 54, 64, 79, 88],
    destination_station_code: 98,
    date: '02/26/2022 02:35 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Goa',
    city: 'Margao',
  },
  {
    id: 292,
    origin_station_code: 9,
    station_path: [26, 36, 46, 59, 67, 70, 83],
    destination_station_code: 98,
    date: '02/26/2022 08:03 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Maharashtra',
    city: 'Talegaon Dabhade',
  },
  {
    id: 110,
    origin_station_code: 17,
    station_path: [24, 38, 47, 59, 63, 74, 81],
    destination_station_code: 99,
    date: '02/09/2022 02:55 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Telangana',
    city: 'Bellampalle',
  },
  {
    id: 272,
    origin_station_code: 7,
    station_path: [48, 53, 61, 74, 85],
    destination_station_code: 94,
    date: '03/12/2022 04:08 AM',
    map_url: 'https://picsum.photos/200',
    state: 'West Bengal',
    city: 'Srirampore',
  },
  {
    id: 133,
    origin_station_code: 1,
    station_path: [36, 45, 53, 64, 72, 86],
    destination_station_code: 95,
    date: '03/29/2022 02:14 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Tripura',
    city: 'Udaipur',
  },
  {
    id: 813,
    origin_station_code: 8,
    station_path: [57, 62, 77, 85],
    destination_station_code: 93,
    date: '03/23/2022 08:28 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Bihar',
    city: 'Mirganj',
  },
  {
    id: 836,
    origin_station_code: 10,
    station_path: [60, 75, 82],
    destination_station_code: 97,
    date: '02/04/2022 10:35 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Gujarat',
    city: 'Padra',
  },
  {
    id: 839,
    origin_station_code: 4,
    station_path: [51, 60, 74, 86],
    destination_station_code: 90,
    date: '04/05/2022 05:47 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Tamil Nadu',
    city: 'Perambalur',
  },
  {
    id: 603,
    origin_station_code: 6,
    station_path: [33, 41, 59, 62, 75, 80],
    destination_station_code: 97,
    date: '02/15/2022 09:24 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Goa',
    city: 'Mapusa',
  },
  {
    id: 612,
    origin_station_code: 7,
    station_path: [34, 48, 52, 67, 71, 88],
    destination_station_code: 90,
    date: '03/31/2022 12:42 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Chandigarh',
    city: 'Chandigarh',
  },
  {
    id: 154,
    origin_station_code: 13,
    station_path: [24, 33, 44, 53, 61, 70, 83],
    destination_station_code: 93,
    date: '03/19/2022 12:02 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Manipur',
    city: 'Imphal',
  },
  {
    id: 475,
    origin_station_code: 3,
    station_path: [56, 65, 79, 84],
    destination_station_code: 97,
    date: '02/21/2022 03:42 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Andhra Pradesh',
    city: 'Bapatla',
  },
  {
    id: 219,
    origin_station_code: 8,
    station_path: [33, 44, 59, 63, 77, 85],
    destination_station_code: 91,
    date: '02/20/2022 04:44 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Karnataka',
    city: 'Ranebennuru',
  },
  {
    id: 604,
    origin_station_code: 15,
    station_path: [43, 54, 64, 70, 82],
    destination_station_code: 95,
    date: '03/01/2022 03:22 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Tripura',
    city: 'Kailasahar',
  },
  {
    id: 439,
    origin_station_code: 11,
    station_path: [22, 30, 42, 53, 62, 78, 88],
    destination_station_code: 95,
    date: '02/19/2022 12:20 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Kerala',
    city: 'Puthuppally',
  },
  {
    id: 668,
    origin_station_code: 11,
    station_path: [54, 67, 79, 82],
    destination_station_code: 98,
    date: '02/06/2022 10:17 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Maharashtra',
    city: 'Ambejogai',
  },
  {
    id: 708,
    origin_station_code: 8,
    station_path: [29, 31, 49, 52, 60, 73, 89],
    destination_station_code: 98,
    date: '02/16/2022 07:49 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Meghalaya',
    city: 'Tura',
  },
  {
    id: 563,
    origin_station_code: 5,
    station_path: [57, 61, 75, 89],
    destination_station_code: 99,
    date: '03/31/2022 08:56 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Dadra and Nagar Haveli',
    city: 'Silvassa',
  },
  {
    id: 915,
    origin_station_code: 17,
    station_path: [40, 54, 60, 73, 81],
    destination_station_code: 96,
    date: '03/01/2022 03:18 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Mizoram',
    city: 'Aizawl',
  },
  {
    id: 175,
    origin_station_code: 3,
    station_path: [51, 64, 72, 82],
    destination_station_code: 96,
    date: '04/03/2022 12:55 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Kerala',
    city: 'Nedumangad',
  },
  {
    id: 771,
    origin_station_code: 19,
    station_path: [26, 32, 40, 54, 62, 77, 84],
    destination_station_code: 91,
    date: '04/07/2022 03:04 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Nagaland',
    city: 'Dimapur',
  },
  {
    id: 313,
    origin_station_code: 9,
    station_path: [60, 76, 84],
    destination_station_code: 99,
    date: '02/17/2022 11:12 AM',
    map_url: 'https://picsum.photos/200',
    state: 'West Bengal',
    city: 'AlipurdUrban Agglomerationr',
  },
  {
    id: 623,
    origin_station_code: 15,
    station_path: [20, 38, 41, 50, 61, 73, 88],
    destination_station_code: 97,
    date: '02/19/2022 12:05 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Delhi',
    city: 'New Delhi',
  },
  {
    id: 812,
    origin_station_code: 10,
    station_path: [53, 60, 71, 80],
    destination_station_code: 93,
    date: '03/27/2022 10:55 PM',
    map_url: 'https://picsum.photos/200',
    state: 'Rajasthan',
    city: 'Sojat',
  },
  {
    id: 834,
    origin_station_code: 13,
    station_path: [66, 71, 80],
    destination_station_code: 97,
    date: '03/24/2022 06:15 AM',
    map_url: 'https://picsum.photos/200',
    state: 'Punjab',
    city: 'Rajpura',
  },
];

const userInfo: UserType = {
  station_code: 67,
  name: 'Nicholas Dennis',
  url: 'https://picsum.photos/200',
};

const Home: NextPage = () => {
  const [route, setRoute] = useState<RouteType>('NEAREST');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const FilteredRidesAndDistance: RideTypeWithDistance[] =
    sortByAndAddDistanceAndFilter({
      rides,
      station_code: userInfo.station_code,
      state,
      city,
    });

  const filteredRidesDateAsc: RideTypeWithDistance[] = filterByDate({
    rides: FilteredRidesAndDistance,
    filter: 'ASC',
  });

  const filteredRidesDateDesc: RideTypeWithDistance[] = filterByDate({
    rides: FilteredRidesAndDistance,
    filter: 'DESC',
  });

  const sortedRides =
    route === 'NEAREST'
      ? FilteredRidesAndDistance
      : route === 'UPCOMING'
      ? filteredRidesDateAsc
      : filteredRidesDateDesc;

  useEffect(() => {
    const { states, cities }: { states: string[]; cities: string[] } =
      getStateAndCity({ rides, state, city });
    setStates(states);
    setCities(cities);
  }, [city, state]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav
          route={route}
          setRoute={setRoute}
          upcomingRidesNo={filteredRidesDateAsc.length}
          pastRidesNo={filteredRidesDateDesc.length}
          state={state}
          setState={setState}
          city={city}
          setCity={setCity}
          states={states}
          cities={cities}
        />
        <RidesWrapper>
          {sortedRides.map((ride) => (
            <RideCard rideInfo={ride} key={ride.id} />
          ))}
        </RidesWrapper>
      </Layout>
    </>
  );
};

export default Home;

const RidesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

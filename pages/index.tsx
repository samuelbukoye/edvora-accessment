import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import RideCard from '../components/RideCard';
import filterByDate from '../utils/filterByDate';
import getStateAndCity from '../utils/getStateAndCity';
import pxTovw from '../utils/pxTovw';
import sortByAndAddDistanceAndFilter from '../utils/sortByAndAddDistanceAndFilter';
import {
  RideType,
  RideTypeWithDistance,
  RouteType,
  UserType,
} from '../utils/types';

const Home = ({
  rides,
  userInfo,
}: {
  rides: RideType[];
  userInfo: UserType;
}) => {
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
  }, [city, rides, state]);

  return (
    <>
      <Head>
        <title>Edvora Rides</title>
        <meta name="description" content="Display available rides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout userInfo={userInfo}>
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
          {sortedRides.length ? (
            sortedRides.map((ride) => (
              <RideCard rideInfo={ride} key={ride.id} />
            ))
          ) : (
            <NoRidesText>
              Unfortunately, there are no rides at the moment
            </NoRidesText>
          )}
        </RidesWrapper>
      </Layout>
    </>
  );
};

export default Home;

const RidesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${pxTovw(13)};
`;

const NoRidesText = styled.h2`
  font-size: ${pxTovw(20)};
  margin-top: ${pxTovw(20)};
  letter-spacing: ${pxTovw(2)};
  text-transform: uppercase;
  text-align: center;
`;

export async function getStaticProps() {
  let userInfo = {};
  let rides = [];

  try {
    const userRes = await axios.get('https://assessment.api.vweb.app/user');
    userInfo = userRes.data;
    const ridesRes = await axios.get('https://assessment.api.vweb.app/rides');
    rides = ridesRes.data;
  } catch {}
  return {
    props: {
      rides,
      userInfo,
    },
  };
}

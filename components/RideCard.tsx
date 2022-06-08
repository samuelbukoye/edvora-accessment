import styled from 'styled-components';
import { RideTypeWithDistance } from '../utils/types';

const RideCard = ({ rideInfo }: { rideInfo: RideTypeWithDistance }) => {
  return (
    <Wrapper>
      <MapImg src={rideInfo.map_url} alt="img of ride location" />
      <RideInfoItems>
        <RideInfoItem>
          <RideInfoItemKey>Ride Id</RideInfoItemKey>:
          <RideInfoItemValue>{rideInfo.id}</RideInfoItemValue>
        </RideInfoItem>
        <RideInfoItem>
          <RideInfoItemKey>Origin Station</RideInfoItemKey>:
          <RideInfoItemValue>{rideInfo.origin_station_code}</RideInfoItemValue>
        </RideInfoItem>
        <RideInfoItem>
          <RideInfoItemKey>station_path</RideInfoItemKey>:
          <RideInfoItemValue>
            {JSON.stringify(rideInfo.station_path).replace(/,/g, ', ')}
          </RideInfoItemValue>
        </RideInfoItem>
        <RideInfoItem>
          <RideInfoItemKey>Date</RideInfoItemKey>:
          <RideInfoItemValue>{rideInfo.date}</RideInfoItemValue>
        </RideInfoItem>
        <RideInfoItem>
          <RideInfoItemKey>Distance</RideInfoItemKey>:
          <RideInfoItemValue>{rideInfo.distance}</RideInfoItemValue>
        </RideInfoItem>
      </RideInfoItems>

      <RideLocationWrapper>
        <RideCitySpan>{rideInfo.city}</RideCitySpan>
        <RideStateSpan>{rideInfo.state}</RideStateSpan>
      </RideLocationWrapper>
    </Wrapper>
  );
};

export default RideCard;

const Wrapper = styled.div`
  height: 19.8rem;
  padding: 2.2rem 2rem 2.2rem 2.9rem;
  border-radius: 1rem;
  background: var(--bg-tertiary);

  display: flex;
  align-items: stretch;
  gap: 4.4rem;
`;

const MapImg = styled.img`
  display: block;
  flex-basis: 29.6rem;
`;

const RideInfoItems = styled.ul`
  display: grid;
  align-items: center;
  align-content: space-between;
`;

const RideInfoItem = styled.li`
  font-size: 1.8rem;
  line-height: 2.2rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const RideInfoItemKey = styled.span`
  color: var(--color-secondary);
`;

const RideInfoItemValue = styled.span`
  color: var(--color-primary);
`;

const RideLocationWrapper = styled.div`
  align-self: flex-start;
  margin-left: auto;

  display: flex;
  gap: 2.4rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const RideCitySpan = styled.span`
  background: #0000008f;
  border-radius: 1.6rem;
  padding: 0.4rem 1rem;
`;

const RideStateSpan = styled.span`
  background: #0000008f;
  border-radius: 1.6rem;
  padding: 0.4rem 1rem;
`;

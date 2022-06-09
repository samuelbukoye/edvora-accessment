import styled from 'styled-components';
import pxTovw from '../utils/pxTovw';
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
  height: ${pxTovw(198)};
  padding: ${pxTovw(22)} ${pxTovw(20)} ${pxTovw(22)} ${pxTovw(29)};
  border-radius: ${pxTovw(10)};
  background: var(--bg-tertiary);

  display: flex;
  align-items: stretch;
  gap: ${pxTovw(44)};

  @media screen and (max-width: 600px) {
    height: ${pxTovw(198, true)};
    padding: ${pxTovw(22, true)} ${pxTovw(20, true)} ${pxTovw(22, true)}
      ${pxTovw(29, true)};
    border-radius: ${pxTovw(10, true)};
    gap: ${pxTovw(44, true)};
  }
`;

const MapImg = styled.img`
  display: block;
  flex-basis: ${pxTovw(296)};

  @media screen and (max-width: 600px) {
    flex-basis: ${pxTovw(296, true)};
  }
`;

const RideInfoItems = styled.ul`
  display: grid;
  align-items: center;
  align-content: space-between;
`;

const RideInfoItem = styled.li`
  font-size: ${pxTovw(18)};
  line-height: ${pxTovw(22)};

  display: flex;
  align-items: center;
  gap: ${pxTovw(4)};

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(18, true)};
    line-height: ${pxTovw(22, true)};

    display: flex;
    align-items: center;
    gap: ${pxTovw(4, true)};
  }
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
  font-size: ${pxTovw(12)};
  font-weight: 500;
  line-height: ${pxTovw(15)};

  display: flex;
  gap: ${pxTovw(24)};

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(12, true)};
    line-height: ${pxTovw(15, true)};

    gap: ${pxTovw(24, true)};
  }
`;

const RideCitySpan = styled.span`
  background: #0000008f;
  text-align: center;
  border-radius: ${pxTovw(16)};
  padding: ${pxTovw(4)} ${pxTovw(10)};

  @media screen and (max-width: 600px) {
    border-radius: ${pxTovw(16, true)};
    padding: ${pxTovw(4, true)} ${pxTovw(10, true)};
  }
`;

const RideStateSpan = styled.span`
  background: #0000008f;
  border-radius: ${pxTovw(16)};
  padding: ${pxTovw(4)} ${pxTovw(10)};

  @media screen and (max-width: 600px) {
    border-radius: ${pxTovw(16, true)};
    padding: ${pxTovw(4, true)} ${pxTovw(10, true)};
  }
`;

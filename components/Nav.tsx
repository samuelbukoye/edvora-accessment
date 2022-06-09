import { useState } from 'react';
import styled from 'styled-components';
import pxTovw from '../utils/pxTovw';
import {
  RouteType,
  SetRouteStateType,
  SetStringStateType,
} from '../utils/types';

const Nav = ({
  route,
  setRoute,
  upcomingRidesNo,
  pastRidesNo,
  state,
  setState,
  city,
  setCity,
  cities,
  states,
}: {
  route: RouteType;
  setRoute: SetRouteStateType;
  upcomingRidesNo: number;
  pastRidesNo: number;
  state: string;
  setState: SetStringStateType;
  city: string;
  setCity: SetStringStateType;
  cities: string[];
  states: string[];
}) => {
  const FilterIconUrl = '/img/filter-icon.png';
  const [DisplayFilter, setDisplayFilter] = useState(false);
  const [DisplayStates, setDisplayStates] = useState(false);
  const [DisplayCities, setDisplayCities] = useState(false);

  const handleStateChange = (value: string) => {
    setState(value);
    setCity('');
    setDisplayStates(false);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    setDisplayCities(false);
  };

  const handleRouteChange = (value: RouteType) => {
    if (route !== value) setRoute(value);
  };

  return (
    <Wrapper>
      <NavItems>
        <NavItem
          active={route === 'NEAREST'}
          onClick={() => handleRouteChange('NEAREST')}
        >
          Nearest rides
        </NavItem>
        <NavItem
          active={route === 'UPCOMING'}
          onClick={() => handleRouteChange('UPCOMING')}
        >
          Upcoming rides ({upcomingRidesNo})
        </NavItem>
        <NavItem
          active={route === 'PAST'}
          onClick={() => handleRouteChange('PAST')}
        >
          Past rides ({pastRidesNo})
        </NavItem>
      </NavItems>
      <FilterDiv
        onMouseOver={() => setDisplayFilter(true)}
        onMouseOut={() => setDisplayFilter(false)}
      >
        <FilterIcon src={FilterIconUrl} alt="filter-icon" />
        <FilterText>Filters</FilterText>

        {DisplayFilter && (
          <FilterDropdown>
            <FilterHeader>
              <FilterHeaderText>Filters</FilterHeaderText>
            </FilterHeader>
            <FilterBody>
              <HiddenSelectElement
                name="States"
                value={state}
                onChange={(e) => handleStateChange(e.target.value)}
              >
                <option value="">State</option>

                {states.length > 0 &&
                  states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </HiddenSelectElement>
              <FilterBodyCard onClick={() => setDisplayStates(!DisplayStates)}>
                <FilterBodyCardText>
                  {state ? state : 'State'}
                </FilterBodyCardText>
                <FilterBodyCardArrow
                  active={DisplayStates}
                ></FilterBodyCardArrow>
                {DisplayStates && (
                  <SelectDropdown
                    onClick={(e) => e.stopPropagation()}
                    style={{ zIndex: '20' }}
                  >
                    <DropdownCard onClick={() => handleStateChange('')}>
                      <DropdownValue>State</DropdownValue>
                    </DropdownCard>

                    {states.length > 0 &&
                      states.map((state) => (
                        <DropdownCard
                          key={state}
                          onClick={() => handleStateChange(state)}
                        >
                          <DropdownValue>{state}</DropdownValue>
                        </DropdownCard>
                      ))}
                  </SelectDropdown>
                )}
              </FilterBodyCard>
              <HiddenSelectElement
                name="Cities"
                value={state}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                <option value="">City</option>

                {cities.length > 0 &&
                  cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </HiddenSelectElement>
              <FilterBodyCard onClick={() => setDisplayCities(!DisplayCities)}>
                <FilterBodyCardText>{city ? city : 'City'}</FilterBodyCardText>
                <FilterBodyCardArrow
                  active={DisplayCities}
                ></FilterBodyCardArrow>
                {DisplayCities && (
                  <SelectDropdown
                    onClick={(e) => e.stopPropagation()}
                    style={{ zIndex: '10' }}
                  >
                    <DropdownCard onClick={() => handleCityChange('')}>
                      <DropdownValue>City</DropdownValue>
                    </DropdownCard>
                    {cities.length > 0 &&
                      cities.map((city) => (
                        <DropdownCard
                          key={city}
                          onClick={() => handleCityChange(city)}
                        >
                          <DropdownValue>{city}</DropdownValue>
                        </DropdownCard>
                      ))}
                  </SelectDropdown>
                )}
              </FilterBodyCard>
            </FilterBody>
          </FilterDropdown>
        )}
      </FilterDiv>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  height: ${pxTovw(81)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxTovw(20)};

  @media screen and (max-width: 600px) {
    height: ${pxTovw(81, true)};
    gap: ${pxTovw(20, true)};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: ${pxTovw(44)};

  @media screen and (max-width: 600px) {
    gap: ${pxTovw(44, true)};
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  font-size: ${pxTovw(18)};
  font-weight: 700;
  line-height: ${pxTovw(22)};
  padding: ${pxTovw(6)} 0;

  color: ${(prop) =>
    prop.active ? 'var(--color-primary)' : 'var(--color-tertiary)'};
  border-bottom: ${pxTovw(2)} solid
    ${(prop) => (prop.active ? 'currentColor' : 'transparent')};

  transition: all 0.5s;

  &:hover {
    color: ${(prop) => (prop.active ? 'currentColor' : 'var(--color-primary)')};
    border-bottom: ${pxTovw(2)} solid
      ${(prop) => (prop.active ? 'currentColor' : 'var(--color-primary)')};
  }

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(18, true)};
    line-height: ${pxTovw(22, true)};
    padding: ${pxTovw(6, true)} 0;
    border-bottom: ${pxTovw(2, true)} solid
      ${(prop) => (prop.active ? 'currentColor' : 'transparent')};
    &:hover {
      border-bottom: ${pxTovw(2, true)} solid
        ${(prop) => (prop.active ? 'currentColor' : 'var(--color-primary)')};
    }
  }
`;

const FilterDiv = styled.div`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: ${pxTovw(8)};

  @media screen and (max-width: 600px) {
    gap: ${pxTovw(8, true)};
  }
`;

const FilterIcon = styled.img`
  display: block;
  width: ${pxTovw(18)};
  height: ${pxTovw(12)};

  @media screen and (max-width: 600px) {
    width: ${pxTovw(18, true)};
    height: ${pxTovw(12, true)};
  }
`;

const FilterText = styled.p`
  color: #f2f2f2;

  font-size: ${pxTovw(16)};
  font-weight: 500;
  line-height: ${pxTovw(19)};

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(16, true)};
    line-height: ${pxTovw(19, true)};
  }
`;

const FilterDropdown = styled.div`
  padding: ${pxTovw(23)} ${pxTovw(30)};
  background: #131313;
  border-radius: ${pxTovw(15)};
  cursor: auto;

  position: absolute;
  top: 90%;
  right: 50%;

  @media screen and (max-width: 600px) {
    padding: ${pxTovw(23, true)} ${pxTovw(30, true)};
    border-radius: ${pxTovw(15, true)};
  }
`;

const FilterHeader = styled.div`
  padding-bottom: ${pxTovw(12)};
  padding-left: ${pxTovw(5)};
  border-bottom: ${pxTovw(1)} solid #cbcbcb;
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding-bottom: ${pxTovw(12, true)};
    padding-left: ${pxTovw(5, true)};
    border-bottom: ${pxTovw(1, true)} solid #cbcbcb;
  }
`;

const FilterHeaderText = styled.h3`
  font-size: ${pxTovw(20)};
  font-weight: 300;
  line-height: ${pxTovw(24)};
  color: #a5a5a5;

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(20, true)};
    line-height: ${pxTovw(24, true)};
  }
`;

const FilterBody = styled.div`
  padding-top: ${pxTovw(20)};
  display: grid;
  grid-gap: ${pxTovw(12.5)};

  @media screen and (max-width: 600px) {
    padding-top: ${pxTovw(20, true)};
    grid-gap: ${pxTovw(12.5, true)};
  }
`;

const FilterBodyCard = styled.div`
  position: relative;
  width: ${pxTovw(168.45)};
  padding: ${pxTovw(8)} ${pxTovw(12)};
  background: #232323;
  border-radius: ${pxTovw(5)};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    width: ${pxTovw(168.45, true)};
    padding: ${pxTovw(8)} ${pxTovw(12, true)};
    border-radius: ${pxTovw(5, true)};
  }
`;

const FilterBodyCardText = styled.p`
  font-size: ${pxTovw(17)};
  font-weight: 400;
  line-height: ${pxTovw(20)};

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(17, true)};
    line-height: ${pxTovw(20, true)};
  }
`;

const FilterBodyCardArrow = styled.div<{ active: boolean }>`
  flex-basis: ${pxTovw(12.19)};
  flex-grow: 0;
  width: 0;
  height: 0;
  border: calc(${pxTovw(12.19)} / 2) solid transparent;
  border-bottom: 0;
  border-top: ${pxTovw(12.19)} solid #a5a5a5;
  transition: all 0.5s;

  transform: rotate(${(prop) => (prop.active ? '180deg' : '0deg')});

  @media screen and (max-width: 600px) {
    flex-basis: ${pxTovw(12.19, true)};
    border: calc(${pxTovw(12.19, true)} / 2) solid transparent;
    border-top: ${pxTovw(12.19, true)} solid #a5a5a5;
  }
`;

const SelectDropdown = styled.div`
  position: absolute;
  /* width: 100%; */
  /* height: 10)}; */
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 10; */
  background: #232323;

  transform: translateY(100%);
  border: ${pxTovw(1)} solid #171717;

  @media screen and (max-width: 600px) {
    border: ${pxTovw(1, true)} solid #171717;
  }
`;

const HiddenSelectElement = styled.select`
  position: absolute;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  top: -99999999999999999999999999px;
`;

const DropdownCard = styled.div`
  position: relative;
  width: 100%;
  padding: ${pxTovw(8)} ${pxTovw(12)};
  background: #232323;
  border-top: ${pxTovw(1)} solid #171717;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: ${pxTovw(8, true)} ${pxTovw(12, true)};
    border-top: ${pxTovw(1, true)} solid #171717;
  }
`;

const DropdownValue = styled.p`
  font-size: ${pxTovw(17)};
  font-weight: 400;
  line-height: ${pxTovw(20)};
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(17, true)};
    line-height: ${pxTovw(20, true)};
  }
`;

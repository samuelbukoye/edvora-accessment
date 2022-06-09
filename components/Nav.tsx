import { useState } from 'react';
import styled from 'styled-components';
import { setStringStateType } from '../utils/types';

const Nav = ({
  upcomingRidesNo,
  pastRidesNo,
  state,
  setState,
  city,
  setCity,
  cities,
  states,
}: {
  upcomingRidesNo: number;
  pastRidesNo: number;
  state: string;
  setState: setStringStateType;
  city: string;
  setCity: setStringStateType;
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

  return (
    <Wrapper>
      <NavItems>
        <NavItem active={true}>Nearest rides</NavItem>
        <NavItem active={false}>Upcoming rides ({upcomingRidesNo})</NavItem>
        <NavItem active={false}>Past rides ({pastRidesNo})</NavItem>
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
  height: 8.1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.4rem;
`;

const NavItem = styled.li<{ active: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.2rem;
  padding: 0.6rem 0;

  color: ${(prop) =>
    prop.active ? 'var(--color-primary)' : 'var(--color-tertiary)'};
  border-bottom: ${(prop) => (prop.active ? '2px solid currentColor' : 'none')};

  transition: all 0.5s;

  &:hover {
    color: ${(prop) => (prop.active ? 'currentColor' : 'var(--color-primary)')};
    border-bottom: 2px solid
      ${(prop) => (prop.active ? 'currentColor' : 'var(--color-primary)')};
  }
`;

const FilterDiv = styled.div`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const FilterIcon = styled.img`
  display: block;
  width: 1.8rem;
  height: 1.2rem;
`;

const FilterText = styled.p`
  color: #f2f2f2;

  font-size: 1.6em;
  font-weight: 500;
  line-height: 1.9em;
`;

const FilterDropdown = styled.div`
  padding: 2.3rem 3rem;
  background: #131313;
  border-radius: 1.5rem;
  cursor: auto;

  position: absolute;
  top: 90%;
  right: 50%;
`;

const FilterHeader = styled.div`
  padding-bottom: 1.2rem;
  padding-left: 0.5rem;
  border-bottom: 1px solid #cbcbcb;
  width: 95%;
  margin: 0 auto;
`;

const FilterHeaderText = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.4rem;
  color: #a5a5a5;
`;

const FilterBody = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-gap: 1.25rem;
`;

const FilterBodyCard = styled.div`
  position: relative;
  width: 16.845rem;
  padding: 0.8rem 1.2rem;
  background: #232323;
  border-radius: 0.5rem;
  cursor: pointer;

  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterBodyCardText = styled.p``;

const FilterBodyCardArrow = styled.div<{ active: boolean }>`
  flex-basis: 1.219rem;
  flex-grow: 0;
  width: 0;
  height: 0;
  border: calc(1.219rem / 2) solid transparent;
  border-bottom: 0;
  border-top: 1.219rem solid #a5a5a5;
  transition: all 0.5s;

  transform: rotate(${(prop) => (prop.active ? '180deg' : '0deg')});
`;

const SelectDropdown = styled.div`
  position: absolute;
  /* width: 100%; */
  /* height: 10rem; */
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 10; */
  background: #232323;

  transform: translateY(100%);
  border: 1px solid #171717;
`;

const DropdownCard = styled.div`
  position: relative;
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: #232323;
  border-top: 1px solid #171717;

  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownValue = styled.p`
  text-align: center;
`;

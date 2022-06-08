import styled from 'styled-components';
import { setStringStateType } from '../utils/types';

const Nav = ({
  upcomingRidesNo,
  pastRidesNo,
}: {
  upcomingRidesNo: number;
  pastRidesNo: number;
  state: string;
  setState: setStringStateType;
  city: string;
  setCity: setStringStateType;
}) => {
  const FilterIconUrl = '/img/filter-icon.png';

  return (
    <Wrapper>
      <NavItems>
        <NavItem active={true}>Nearest rides</NavItem>
        <NavItem active={false}>Upcoming rides ({upcomingRidesNo})</NavItem>
        <NavItem active={false}>Past rides ({pastRidesNo})</NavItem>
      </NavItems>
      <FilterDiv>
        <FilterIcon src={FilterIconUrl} alt="filter-icon" />
        <FilterText>Filters</FilterText>

        <FilterDropdown>
          <FilterHeader>
            <FilterHeaderText>Filters</FilterHeaderText>
          </FilterHeader>
          <FilterBody>
            <FilterBodyCard>
              <FilterBodyCardText>State</FilterBodyCardText>
              <FilterBodyCardArrow></FilterBodyCardArrow>
            </FilterBodyCard>
            <FilterBodyCard>
              <FilterBodyCardText>City</FilterBodyCardText>
              <FilterBodyCardArrow></FilterBodyCardArrow>
            </FilterBodyCard>
          </FilterBody>
        </FilterDropdown>
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
  width: 16.845rem;
  padding: 0.8rem 1.2rem;
  background: #232323;
  border-radius: 0.5rem;

  font-size: 1.7em;
  font-weight: 400;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterBodyCardText = styled.p``;
const FilterBodyCardArrow = styled.div`
  flex-basis: 1.219rem;
  flex-grow: 0;
  width: 0;
  height: 0;
  border: calc(1.219rem / 2) solid transparent;
  border-bottom: 0;
  border-top: 1.219rem solid #a5a5a5;
`;

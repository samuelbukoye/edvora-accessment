import styled from 'styled-components';

const Nav = () => {
  const FilterIconUrl = '/img/filter-icon.png';

  return (
    <Wrapper>
      <NavItems>
        <NavItem active={true}>Nearest rides</NavItem>
        <NavItem active={false}>Upcoming rides (4)</NavItem>
        <NavItem active={false}>Past rides (2)</NavItem>
      </NavItems>
      <FilterDiv>
        <FilterIcon src={FilterIconUrl} alt="filter-icon" />
        <FilterText>Filters</FilterText>
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

import styled from 'styled-components';
import GlobalStyle from './Global';
import Header from './Header';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  padding: 2.9rem 4.3rem;
`;

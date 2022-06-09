import styled from 'styled-components';
import { UserType } from '../../utils/types';
import GlobalStyle from './Global';
import Header from './Header';

const Layout = ({
  userInfo,
  children,
}: {
  userInfo: UserType;
  children: any;
}) => {
  return (
    <>
      <GlobalStyle />
      <Header userInfo={userInfo} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  padding: 2.9rem 4.3rem;
`;

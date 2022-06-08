import GlobalStyle from './Global';
import Header from './Header';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <>{children}</>
    </>
  );
};

export default Layout;

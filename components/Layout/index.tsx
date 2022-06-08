import GlobalStyle from './Global';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <>{children}</>
    </>
  );
};

export default Layout;

import styled from 'styled-components';
import { placeholderDataUri } from '../../utils/data';
import { UserType } from '../../utils/types';

const Header = ({ userInfo }: { userInfo: UserType }) => {
  return (
    <Wrapper>
      <Logo>Edvora</Logo>
      <UserName>{userInfo.name ? userInfo.name : 'anonymous'}</UserName>
      <UserImage
        src={userInfo.url ? userInfo.url : placeholderDataUri}
        alt="proile Image"
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background: #101010;
  padding: 0 1.972rem 0 4.3rem;
  height: 8.4rem;

  display: flex;
  align-items: center;
  gap: 2.5em;
`;

const Logo = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.296rem;
`;

const UserName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.42rem;

  margin-left: auto;
`;

const UserImage = styled.img`
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
`;

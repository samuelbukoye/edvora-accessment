import styled from 'styled-components';
import { placeholderDataUri } from '../../utils/data';
import pxTovw from '../../utils/pxTovw';
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
  padding: 0 ${pxTovw(19.72)} 0 ${pxTovw(43)};
  height: ${pxTovw(84)};

  display: flex;
  align-items: center;
  gap: ${pxTovw(25)};
`;

const Logo = styled.h1`
  font-size: ${pxTovw(36)};
  font-weight: 700;
  line-height: ${pxTovw(4296)};
`;

const UserName = styled.p`
  font-size: ${pxTovw(20)};
  font-weight: 700;
  line-height: ${pxTovw(242)};

  margin-left: auto;
`;

const UserImage = styled.img`
  height: ${pxTovw(44)};
  width: ${pxTovw(44)};
  border-radius: 50%;
`;

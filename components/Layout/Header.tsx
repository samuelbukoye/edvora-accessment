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

  @media screen and (max-width: 600px) {
    padding: 0 ${pxTovw(19.72, true)} 0 ${pxTovw(43, true)};
    height: ${pxTovw(84, true)};

    gap: ${pxTovw(25, true)};
  }
`;

const Logo = styled.h1`
  font-size: ${pxTovw(36)};
  font-weight: 700;
  line-height: ${pxTovw(4296)};

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(36, true)};
    line-height: ${pxTovw(4296, true)};
  }
`;

const UserName = styled.p`
  font-size: ${pxTovw(20)};
  font-weight: 700;
  line-height: ${pxTovw(242)};
  margin-left: auto;

  @media screen and (max-width: 600px) {
    font-size: ${pxTovw(20, true)};
    line-height: ${pxTovw(242, true)};
  }
`;

const UserImage = styled.img`
  height: ${pxTovw(44)};
  width: ${pxTovw(44)};
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    height: ${pxTovw(44, true)};
    width: ${pxTovw(44, true)};
  }
`;

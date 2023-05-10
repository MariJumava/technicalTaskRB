import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SignIn } from '../Modal/SignIn/SignIn';
import { SignOut } from '../Modal/SignOut/SignOut';
import { AuthUser } from '../../store/types/auth';
import iconUser from '../../images/icon-user.svg';
import arrowDown from '../../images/arrow-down.svg';
import logIn from '../../images/log-in.svg';
import {
  Img,
  StyledFlex,
  StyledLogo,
  StyledName,
  StyledSignIn,
  StyledText,
  StyledTitle,
  StyledWrap,
  StyledWrapSign,
  StyledWrapUser,
  StyledTitleMob,
} from './Navbar.styles';

export const Navbar = () => {
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);

  const closeOpenCard = () => {
    setShowOpenCard(false);
  };
  const closeSignOut = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setShowSignOut(false);
    closeOpenCard();
  };
  const { isAuth, authUser } = useSelector(
    (store: { auth: { isAuth: boolean; authUser: AuthUser } }) => store.auth,
  );

  return (
    <StyledWrap>
      <StyledFlex>
        <StyledLogo>
          <StyledTitle props="props">RichBrains</StyledTitle>
          <StyledTitleMob>RB</StyledTitleMob>
        </StyledLogo>
        <StyledText>Clients</StyledText>
      </StyledFlex>
      {!isAuth ? (
        <StyledWrapSign onClick={() => setShowOpenCard(true)}>
          <Img src={logIn} />
          <StyledSignIn>Sign in</StyledSignIn>
          {showOpenCard ? <SignIn closeOpenCard={closeOpenCard} /> : null}
        </StyledWrapSign>
      ) : (
        <StyledWrapUser onClick={() => setShowSignOut(true)}>
          <Img src={iconUser} />
          <StyledName>{authUser.login}</StyledName>
          <Img src={arrowDown} />
        </StyledWrapUser>
      )}
      {showSignOut ? <SignOut closeSignOut={closeSignOut} /> : null}
    </StyledWrap>
  );
};

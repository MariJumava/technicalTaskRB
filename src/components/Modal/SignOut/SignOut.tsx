import styled from 'styled-components';
import { useActionCreator } from '../../../hooks/useActionCreator';
import {
  Button,
  ButtonClose,
  Container,
  StyledClose,
  StyledTitle,
  Wrap,
} from '../SignIn/SignIn.styles';

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;
export const StyledText = styled.p`
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  margin-bottom: 40px;
  color: #313131;
`;

export const SignOut = ({
  closeSignOut,
}: {
  closeSignOut: (e: { stopPropagation: () => void }) => void;
}) => {
  const { logout } = useActionCreator();

  const handleSignOut = (e: { stopPropagation: () => void }): void => {
    logout();
    closeSignOut(e);
  };
  return (
    <Wrap>
      <Container>
        <ButtonClose onClick={closeSignOut}>&times;</ButtonClose>
        <StyledWrap>
          <StyledTitle>Sign out</StyledTitle>
          <StyledText>Are you sure you want to sign out?</StyledText>
          <Button onClick={handleSignOut}>Yes, sign out</Button>
          <StyledClose onClick={closeSignOut}>No, close</StyledClose>
        </StyledWrap>
      </Container>
    </Wrap>
  );
};

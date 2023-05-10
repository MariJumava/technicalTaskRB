import { StyledText, StyledWrap } from '../SignOut/SignOut';
import {
  Button,
  ButtonClose,
  Container,
  StyledClose,
  StyledTitle,
  Wrap,
} from '../SignIn/SignIn.styles';

export const DeleteUser = ({
  closeDeleteCard,
  removeUser,
}: {
  closeDeleteCard: (e: {
    nativeEvent: { stopPropagation: () => void };
  }) => void;
  removeUser: (e: { nativeEvent: any }) => void;
}) => {
  return (
    <Wrap>
      <Container>
        <ButtonClose onClick={closeDeleteCard}>&times;</ButtonClose>
        <StyledWrap>
          <StyledTitle>Delete</StyledTitle>
          <StyledText>Are you sure you want to delete client?</StyledText>
          <Button props="props" onClick={removeUser}>
            Yes, delete
          </Button>
          <StyledClose onClick={closeDeleteCard}>Close</StyledClose>
        </StyledWrap>
      </Container>
    </Wrap>
  );
};

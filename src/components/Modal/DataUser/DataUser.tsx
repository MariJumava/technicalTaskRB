import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActionCreator } from '../../../hooks/useActionCreator';
import { DeleteUser } from '../DeleteUser/DeleteUser';
import { EditUser } from '../EditUser/EditUser';
import { AuthUser } from '../../../store/types/auth';
import editIcon from '../../../images/edit.svg';
import trashIcon from '../../../images/trash.svg';
import ava from '../../../images/ava.svg';
import ageUser from '../../../images/age.svg';
import telUser from '../../../images/tel.svg';
import { ButtonClose, Container, Wrap } from '../SignIn/SignIn.styles';
import {
  ImgIcon,
  StyledCloseBtn,
  StyledData,
  StyledDelete,
  StyledEdit,
  StyledName,
  StyledWrap,
  StyledWrapBtns,
} from './DataUser.styles';

export const DataUser = ({
  closeOpenCard,
  selectedCard,
}: {
  closeOpenCard: (e: { nativeEvent: { stopPropagation: () => void } }) => void;
  selectedCard: any;
}) => {
  const [showOpenCardDelete, setShowOpenCardDelete] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);

  const closeDeleteCard = (e: {
    nativeEvent: { stopPropagation: () => void };
  }) => {
    e.nativeEvent.stopPropagation();
    setShowOpenCardDelete(false);
  };

  const closeEditCard = (e: {
    nativeEvent: { stopPropagation: () => void };
  }) => {
    e.nativeEvent.stopPropagation();
    setShowEditCard(false);
  };

  const { isAuth } = useSelector(
    (store: { auth: { isAuth: boolean } }) => store.auth,
  );
  const { authUser } = useSelector(
    (store: { auth: { authUser: AuthUser } }) => store.auth,
  );
  const { deleteUser } = useActionCreator();

  const removeUser = (e: { nativeEvent: any }) => {
    e.nativeEvent.stopPropagation();
    deleteUser({ id: selectedCard.id, token: authUser.token });
    closeOpenCard(e);
    closeDeleteCard(e);
  };

  const { editUser } = useActionCreator();
  const saveChanges = (
    event: { nativeEvent: any },
    values: { name: string; surname: string; age: string; phone: string },
  ): void => {
    event.nativeEvent.stopPropagation();
    const user = {
      name: values.name,
      surname: values.surname,
      age: values.age,
      phone: values.phone,
      id: selectedCard.id,
      token: authUser.token,
    };
    editUser(user);
    closeEditCard(event);
    closeOpenCard(event);
  };

  return (
    <>
      {isAuth && (
        <Wrap>
          <Container>
            <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
            <StyledWrap>
              <StyledWrapBtns>
                <StyledEdit onClick={() => setShowEditCard(true)}>
                  <ImgIcon src={editIcon} />
                  <span>Edit profile</span>
                </StyledEdit>
                <StyledDelete onClick={() => setShowOpenCardDelete(true)}>
                  <ImgIcon src={trashIcon} />
                  <span>Delete client</span>
                </StyledDelete>
              </StyledWrapBtns>
              <img src={ava} />
              <StyledName>
                {selectedCard.name} {selectedCard.surname}
              </StyledName>
              <StyledData>
                <img src={ageUser} />
                {selectedCard.age}
              </StyledData>
              <StyledData>
                <img src={telUser} />
                {selectedCard.phone}
              </StyledData>
              <StyledCloseBtn onClick={closeOpenCard}>Close</StyledCloseBtn>
            </StyledWrap>
          </Container>
          {showOpenCardDelete && (
            <DeleteUser
              removeUser={removeUser}
              closeDeleteCard={closeDeleteCard}
            />
          )}
          {showEditCard && (
            <EditUser
              removeUser={removeUser}
              selectedUser={selectedCard}
              saveChanges={saveChanges}
              closeEditCard={closeEditCard}
            />
          )}
        </Wrap>
      )}
    </>
  );
};

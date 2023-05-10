import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthUser } from '../../../store/types/auth';
import avaUser from '../../../images/ava.svg';
import trashIcon from '../../../images/trash.svg';
import {
  ImgIcon,
  StyledDelete,
  StyledDeleteForEdit,
} from '../DataUser/DataUser.styles';
import { ButtonClose, Wrap, StyledClose } from '../SignIn/SignIn.styles';
import {
  StyledContainer,
  InputAddUser,
  StyledBtnSave,
  StyledFormAddUser,
  StyledInfo,
  StyledName,
  StyledTitleNew,
  StyledWrapInput,
  InputAddUserName,
  StyledWrapBtns,
} from '../AddUser/AddUser.styles';

type FormValues = {
  name: string;
  surname: string;
  age: string;
  phone: string;
};

export const EditUser = ({
  closeEditCard,
  saveChanges,
  selectedUser,
  removeUser,
}: {
  closeEditCard: (e: { nativeEvent: { stopPropagation: () => void } }) => void;
  saveChanges: (
    event: {
      nativeEvent: any;
    },
    values: {
      name: string;
      surname: string;
      age: string;
      phone: string;
    },
  ) => void;
  selectedUser: any;
  removeUser: (e: { nativeEvent: any }) => void;
}) => {
  const { isAuth } = useSelector(
    (store: { auth: { isAuth: boolean; authUser: AuthUser } }) => store.auth,
  );

  const [values, setValues] = useState<FormValues>({
    name: selectedUser.name,
    surname: selectedUser.surname,
    age: selectedUser.age,
    phone: selectedUser.phone,
  });

  const onSaveChanges = (e: any) => {
    saveChanges(e, values);
  };

  return (
    <>
      {isAuth && (
        <Wrap>
          <StyledContainer>
            <ButtonClose onClick={closeEditCard}>&times;</ButtonClose>
            <StyledTitleNew>Edit client</StyledTitleNew>
            <StyledInfo>
              <img src={avaUser} />
              <StyledFormAddUser onSubmit={onSaveChanges}>
                <StyledInfo>
                  <StyledWrapInput>
                    <StyledName>First name</StyledName>
                    <InputAddUserName
                      type="text"
                      value={values.name}
                      onChange={(event) =>
                        setValues((prevState) => ({
                          ...prevState,
                          name: event.target.value,
                        }))
                      }
                    />
                  </StyledWrapInput>
                  <StyledWrapInput>
                    <StyledName>Last name</StyledName>
                    <InputAddUserName
                      type="text"
                      value={values.surname}
                      onChange={(event) =>
                        setValues((prevState) => ({
                          ...prevState,
                          surname: event.target.value,
                        }))
                      }
                    />
                  </StyledWrapInput>
                </StyledInfo>
                <StyledWrapInput>
                  <StyledName>Date of birth</StyledName>
                  <InputAddUser
                    type="date"
                    value={values.age}
                    onChange={(event) =>
                      setValues((prevState) => ({
                        ...prevState,
                        age: event.target.value,
                      }))
                    }
                  />
                </StyledWrapInput>
                <StyledWrapInput>
                  <StyledName>Country</StyledName>
                  <InputAddUser type="text" placeholder="Select" />
                </StyledWrapInput>
                <StyledWrapInput>
                  <StyledName>Telephone</StyledName>
                  <InputAddUser
                    type="telephone"
                    placeholder="Mob &#709;"
                    value={values.phone}
                    onChange={(event) =>
                      setValues((prevState) => ({
                        ...prevState,
                        phone: event.target.value,
                      }))
                    }
                  />
                </StyledWrapInput>
                <StyledWrapBtns>
                  <StyledDeleteForEdit props="props" onClick={removeUser}>
                    <ImgIcon src={trashIcon} />
                    <span>Delete client</span>
                  </StyledDeleteForEdit>
                  <StyledBtnSave type="submit">Save</StyledBtnSave>
                  <StyledClose onClick={closeEditCard}>Cancel</StyledClose>
                  <StyledDelete props="props" onClick={removeUser}>
                    <ImgIcon src={trashIcon} />
                    <span>Delete client</span>
                  </StyledDelete>
                </StyledWrapBtns>
              </StyledFormAddUser>
            </StyledInfo>
          </StyledContainer>
        </Wrap>
      )}
    </>
  );
};

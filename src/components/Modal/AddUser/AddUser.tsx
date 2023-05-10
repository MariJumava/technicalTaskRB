import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActionCreator } from '../../../hooks/useActionCreator';
import { AuthUser } from '../../../store/types/auth';
import avaUser from '../../../images/ava.svg';
import arrowDown from '../../../images/arrow-down.svg';
import { ButtonClose, StyledClose, Wrap } from '../SignIn/SignIn.styles';
import {
  Img,
  InputAddUser,
  InputAddUserName,
  InputAddUserTel,
  StyledBtnSave,
  StyledContainer,
  StyledFormAddUser,
  StyledInfo,
  StyledMobInput,
  StyledName,
  StyledText,
  StyledTitleNew,
  StyledWrapBtns,
  StyledWrapInput,
} from './AddUser.styles';

export const AddUser = ({ closeOpenCard }: { closeOpenCard: () => void }) => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    age: '',
    phone: '',
    country: '',
  });

  const { authUser } = useSelector(
    (store: { auth: { authUser: AuthUser } }) => store.auth,
  );

  const { setUser } = useActionCreator();
  const handleSubmit = (event: { stopPropagation: () => void }): void => {
    event.stopPropagation();
    const user = {
      name: values.name,
      surname: values.surname,
      age: values.age,
      phone: values.phone,
      country: values.country,
      token: authUser.token,
    };
    setUser(user);
    closeOpenCard();
  };

  return (
    <Wrap>
      <StyledContainer>
        <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
        <StyledTitleNew>New client</StyledTitleNew>
        <StyledInfo>
          <img src={avaUser} />
          <StyledFormAddUser onSubmit={handleSubmit}>
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
              <InputAddUser
                type="text"
                placeholder="Select"
                value={values.country}
                onChange={(event) =>
                  setValues((prevState) => ({
                    ...prevState,
                    country: event.target.value,
                  }))
                }
              />
            </StyledWrapInput>
            <StyledWrapInput>
              <StyledName>Telephone</StyledName>
              <InputAddUserTel
                type="telephone"
                placeholder="+44 112 334 5678"
                value={values.phone}
                onChange={(event) =>
                  setValues((prevState) => ({
                    ...prevState,
                    phone: event.target.value,
                  }))
                }
              />
              <StyledMobInput>
                <StyledText>Mob</StyledText>
                <Img src={arrowDown} />
              </StyledMobInput>
            </StyledWrapInput>
            <StyledWrapBtns>
              <StyledBtnSave type="submit">Save</StyledBtnSave>
              <StyledClose onClick={closeOpenCard}>Close</StyledClose>
            </StyledWrapBtns>
          </StyledFormAddUser>
        </StyledInfo>
      </StyledContainer>
    </Wrap>
  );
};

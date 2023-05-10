import styled from 'styled-components';
import {
  Container,
  Input,
  StyledForm,
  StyledTitle,
} from '../SignIn/SignIn.styles';

export const StyledFormAddUser = styled(StyledForm)`
  align-items: flex-start;
  padding-top: 0;
`;
export const StyledContainer = styled(Container)`
  width: 800px;
  height: 610px;
  @media (max-width: 575px) {
    width: 100%;
    height: 130vh;
    top: 0;
  }
`;
export const StyledInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledName = styled.p`
  margin-bottom: 7px;
  font-family: 'ProximaNovaBold';
  font-size: 16px;
  color: #313131;
`;
export const InputAddUserName = styled(Input)`
  width: 200px;
  margin-right: 20px;
  padding-top: 0;
  @media (max-width: 575px) {
    width: 260px;
  }
`;
export const InputAddUser = styled(InputAddUserName)`
  width: 420px;
  @media (max-width: 575px) {
    width: 260px;
  }
`;
export const InputAddUserTel = styled(InputAddUser)`
  padding-left: 100px;
`;
export const StyledBtnSave = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 35px;
  font-family: 'ProximaNovaRegular';
  font-size: 18px;
  color: #ffffff;
  background: #188cfb;
  border-radius: 4px;
  border: none;
`;
export const StyledTitleNew = styled(StyledTitle)`
  margin-left: 70px;
  margin-top: 60px;
  @media (max-width: 575px) {
    margin: 40px auto 30px;
    text-align: center;
  }
`;

export const StyledWrapInput = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledWrapBtns = styled.div`
  position: absolute;
  left: 70px;
  bottom: 50px;
  @media (max-width: 575px) {
    position: static;
  }
`;

export const StyledMobInput = styled.div`
  position: absolute;
  top: 35px;
  left: 15px;
  height: 25px;
  border-right: 1px solid rgba(38, 38, 38, 0.12);
`;
export const StyledText = styled.span`
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  margin-right: 16px;
  color: #313131;
`;
export const Img = styled.img`
  margin-right: 16px;
`;

import styled from 'styled-components';
import { StyledClose } from '../SignIn/SignIn.styles';

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;
export const StyledWrapBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const StyledEdit = styled.button`
  font-family: 'ProximaNovaBold';
  font-size: 16px;
  background: none;
  border: none;
  color: #313131;
  @media (max-width: 575px) {
    margin-bottom: 30px;
  }
`;
export const StyledDelete = styled.button<{ props?: string }>`
  margin-left: ${({ props }) => (props ? '350px' : '0px')};
  font-family: 'ProximaNovaBold';
  font-size: 16px;
  background: none;
  border: none;
  color: #e9281b;
  @media (max-width: 575px) {
    display: ${({ props }) => (props ? 'none' : 'block')};
  }
`;
export const StyledDeleteForEdit = styled(StyledDelete)`
  display: none;
  @media (max-width: 575px) {
    display: block;
    margin: 50px 0;
  }
`;
export const ImgIcon = styled.img`
  margin-right: 10px;
`;
export const StyledName = styled.span`
  font-family: 'ProximaNovaBold';
  font-size: 32px;
  margin: 20px 0;
  color: #000000;
`;
export const StyledData = styled.span`
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  margin: 10px 0;
  color: #313131;
`;
export const StyledCloseBtn = styled(StyledClose)`
  padding: 70px 0px 50px;
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;
export const Container = styled.div`
  position: absolute;
  top: 15%;
  width: 450px;
  height: fit-content;
  background: #ffffff;
  @media (max-width: 575px) {
    width: 100%;
    height: 100vh;
    top: 0;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;
export const StyledTitle = styled.p`
  margin: 40px 0;
  font-family: 'ProximaNovaBold';
  font-size: 32px;
  color: #000000;
`;
export const CastomInput = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
`;
export const Input = styled.input`
  width: 290px;
  height: 40px;
  padding-left: 15px;
  background: #ffffff;
  border: 1px solid rgba(38, 38, 38, 0.12);
  border-radius: 4px;
`;
export const ButtonClose = styled.div`
  position: absolute;
  right: 0;
  padding: 25px;
  font-family: 'ProximaNovaRegular';
  font-size: 27px;
  color: #313131;
  cursor: pointer;
`;
export const Button = styled.button<{ props?: string }>`
  width: 290px;
  height: 40px;
  margin-bottom: 30px;
  background: ${({ props }) => (props ? ' #E9281B' : '#188cfb')};
  border-radius: 4px;
  border: none;
  font-family: 'ProximaNovaBold';
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
export const StyledClose = styled.button`
  font-family: 'ProximaNovaBold';
  font-size: 16px;
  color: #313131;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledError = styled.p`
  font-weight: 600;
  font-family: 'ProximaNovaRegular';
  font-size: 12px;
  color: #e9281b;
`;

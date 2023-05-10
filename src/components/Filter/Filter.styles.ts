import styled from 'styled-components';

export const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 0 20px;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 0 20px;
  }
`;
export const StyledInput = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 210px;
  height: 40px;
  padding-left: 40px;
  background: #ffffff;
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  color: #313131;
  border: 1px solid rgba(38, 38, 38, 0.12);
  border-radius: 4px;
  @media (max-width: 575px) {
    width: 280px;
    margin-bottom: 20px;
  }
`;
export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background: #ffffff;
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  color: #313131;
  border: 1px solid rgba(38, 38, 38, 0.12);
  border-radius: 4px;
  @media (max-width: 575px) {
    width: 280px;
  }
`;
export const Img = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const ImgArrow = styled.img`
  width: 10px;
`;
export const ImgArrows = styled.img`
  width: 14px;
`;
export const StyledTitle = styled.span<{ props?: string }>`
  margin: 0 10px;
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  color: #313131;
  opacity: ${({ props }) => (props ? '1' : '0.5')};
`;
export const StyledLabel = styled.label`
  margin-left: 7px;
  font-family: 'ProximaNovaRegular';
  font-size: 16px;
  color: #313131;
`;
export const WrapDropDown = styled.div<{ isOpenSort: boolean }>`
  position: absolute;
  top: 173px;
  right: 190px;
  display: ${({ isOpenSort }) => (isOpenSort ? 'flex' : 'hidden')};
  flex-direction: column;
  justify-content: space-evenly;
  width: 250px;
  height: 240px;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 7px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  @media (max-width: 575px) {
    top: 193px;
    right: 130px;
    width: 280px;
  }
`;
export const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StyledAddBtn = styled.button`
  position: absolute;
  top: 120px;
  right: 80px;
  width: 60px;
  height: 60px;
  font-family: 'ProximaNovaBold';
  font-size: 27px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  text-align: center;
  background: #188cfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 7px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 575px) {
    bottom: 30px;
    right: 30px;
    top: auto;
  }
`;
export const StyledWrapAsc = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 40px;
  background: rgba(38, 38, 38, 0.12);
  border-radius: 4px;
`;

export const StyledAsc = styled.button<{ asc: boolean }>`
  width: 107px;
  height: 34px;
  margin: auto;
  border: none;
  color: ${({ asc }) => (asc ? '#313131' : '#188CFB')};
  background: ${({ asc }) => (asc ? 'none' : '#ffffff')};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

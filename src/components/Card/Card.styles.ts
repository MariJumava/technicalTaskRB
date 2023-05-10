import styled from 'styled-components';

export const StyledWrap = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 15px;
  width: 285px;
  height: 323px;
  background: #ffffff;
  border-radius: 10px;
  :hover {
    background: #f8f9ff;
  }
`;
export const StyledName = styled.p`
  font-family: 'ProximaNovaBold';
  font-size: 18px;
  color: #000000;
`;
export const Img = styled.img`
  margin-right: 10px;
`;
export const StyledData = styled.div`
  display: flex;
  font-family: 'ProximaNovaRegular';
`;

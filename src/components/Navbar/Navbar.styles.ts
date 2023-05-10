import styled from 'styled-components';

export const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLogo = styled.div`
  width: 200px;
  height: 60px;
  margin-right: 40px;
  background: #188cfb;
  @media (max-width: 575px) {
    width: 60px;
    margin-right: 20px;
  }
`;
export const StyledTitle = styled.h2<{ props?: string }>`
  display: block;
  padding-top: ${({ props }) => (props ? '20px' : '0')};
  font-family: 'ProximaNovaBold';
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  @media (max-width: 575px) {
    display: none;
  }
`;
export const StyledTitleMob = styled.h3`
  display: none;
  @media (max-width: 575px) {
    display: block;
    padding-top: 20px;
    font-family: 'ProximaNovaBold';
    font-size: 18px;
    color: #ffffff;
    text-align: center;
  }
`;
export const StyledText = styled.span`
  font-family: 'ProximaNovaRegular';
  font-size: 20px;
  color: #313131;
`;
export const StyledWrapSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 40px;
  margin-right: 40px;
  background: #188cfb;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 575px) {
    width: 40px;
    margin-right: 10px;
  }
`;
export const StyledName = styled.span`
  display: contents;
  font-family: 'ProximaNovaRegular';
  font-size: 18px;
  @media (max-width: 575px) {
    display: none;
  }
`;
export const StyledSignIn = styled(StyledTitle)`
  font-size: 16px;
`;
export const Img = styled.img`
  margin: 0 8px;
`;
export const StyledWrapUser = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;

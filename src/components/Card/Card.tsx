import avaUser from '../../images/ava.svg';
import ageUser from '../../images/age.svg';
import telUser from '../../images/tel.svg';
import { Img, StyledData, StyledName, StyledWrap } from './Card.styles';

export const Card = ({
  name,
  surname,
  phone,
  age,
  openSelectedCard,
}: {
  name: string;
  surname: string;
  phone: string;
  age: string;
  openSelectedCard: (e: { stopPropagation: () => void }) => void;
}) => {
  return (
    <StyledWrap onClick={openSelectedCard}>
      <img src={avaUser} />
      <StyledName>
        {name}&nbsp;{surname}
      </StyledName>
      <StyledData>
        <Img src={ageUser} />
        {age}
      </StyledData>
      <StyledData>
        <Img src={telUser} />
        {phone}
      </StyledData>
    </StyledWrap>
  );
};

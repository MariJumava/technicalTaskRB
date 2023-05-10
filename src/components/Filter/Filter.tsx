import { useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { AddUser } from '../Modal/AddUser/AddUser';
import search from '../../images/search.svg';
import arrows from '../../images/arrows.svg';
import arrowDown from '../../images/arrow-down.svg';
import {
  DropDown,
  Img,
  ImgArrow,
  ImgArrows,
  Input,
  StyledAddBtn,
  StyledAsc,
  StyledInput,
  StyledLabel,
  StyledRadio,
  StyledTitle,
  StyledWrap,
  StyledWrapAsc,
  WrapDropDown,
} from './Filter.styles';

export const Filter = ({ handleChange }: any) => {
  const [showOpenCard, setShowOpenCard] = useState<boolean>(false);
  const [isOpenSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Name');
  const [asc, setAsc] = useState(true);
  const ref = useClickOutside(() => setOpenSort(false));

  const onOptionChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setSelectedSort(event.target.value);

  const closeDropDown = () => {
    setOpenSort(false);
  };
  const closeOpenCard = () => {
    setShowOpenCard(false);
  };
  const { isAuth } = useSelector(
    (store: { auth: { isAuth: boolean } }) => store.auth,
  );
  return (
    <>
      <StyledWrap>
        <StyledInput>
          <Img src={search} />
          <Input
            type="text"
            placeholder="Type to search..."
            onChange={handleChange}
          />
        </StyledInput>
        <DropDown onClick={() => setOpenSort(true)}>
          <div>
            <ImgArrows src={arrows} />
            <StyledTitle>Sort by:</StyledTitle>
            <StyledTitle props="props">{selectedSort}</StyledTitle>
          </div>
          <ImgArrow src={arrowDown} />
        </DropDown>
      </StyledWrap>
      {isOpenSort && (
        <WrapDropDown ref={ref} isOpenSort={isOpenSort}>
          <StyledRadio>
            <input
              type="radio"
              name="sort-dropdown"
              value="Name"
              id="name"
              checked={selectedSort === 'Name'}
              onChange={onOptionChange}
              onClick={closeDropDown}
            />
            <StyledLabel htmlFor="name">Name</StyledLabel>
          </StyledRadio>
          <StyledRadio>
            <input
              type="radio"
              name="sort-dropdown"
              value="Date of birth"
              id="date-of-birth"
              checked={selectedSort === 'Date of birth'}
              onChange={onOptionChange}
              onClick={closeDropDown}
            />
            <StyledLabel htmlFor="date-of-birth">Date of birth</StyledLabel>
          </StyledRadio>
          <StyledRadio>
            <input
              type="radio"
              name="sort-dropdown"
              value="Country"
              id="country"
              checked={selectedSort === 'Country'}
              onChange={onOptionChange}
              onClick={closeDropDown}
            />
            <StyledLabel htmlFor="country">Country</StyledLabel>
          </StyledRadio>

          <StyledRadio>
            <input
              type="radio"
              name="sort-dropdown"
              value="Telephone"
              id="telephone"
              checked={selectedSort === 'Telephone'}
              onChange={onOptionChange}
              onClick={closeDropDown}
            />
            <StyledLabel htmlFor="telephone">Telephone</StyledLabel>
          </StyledRadio>

          <StyledWrapAsc>
            <StyledAsc asc={!asc} onClick={() => setAsc(true)}>
              ↑ Asc.
            </StyledAsc>
            <StyledAsc asc={asc} onClick={() => setAsc(false)}>
              ↓ Desc.
            </StyledAsc>
          </StyledWrapAsc>
        </WrapDropDown>
      )}
      {isAuth && (
        <StyledAddBtn onClick={() => setShowOpenCard(true)}>+</StyledAddBtn>
      )}
      {showOpenCard ? <AddUser closeOpenCard={closeOpenCard} /> : null}
    </>
  );
};

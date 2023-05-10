import { SetStateAction, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from '../components/Card/Card';
import { IUserInfoData } from '../store/types/user-info';
import { useActionCreator } from '../hooks/useActionCreator';
import { Filter } from '../components/Filter/Filter';
import { DataUser } from '../components/Modal/DataUser/DataUser';

const StyledWrap = styled.div`
  min-height: 100vh;
  padding: 0 200px;
  background: #e5e5e5;
  @media (max-width: 575px) {
    padding: 0 20px;
  }
`;
const StyledCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;
  @media (max-width: 575px) {
    justify-content: center;
  }
`;
export const Home = () => {
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCardId, setSelectedCardId] = useState<
    string | SetStateAction<null>
  >(null);

  const closeOpenCard = (e: {
    nativeEvent: { stopPropagation: () => void };
  }) => {
    e.nativeEvent.stopPropagation();
    setShowOpenCard(false);
  };

  const openSelectedCard = (cardId: string | SetStateAction<null>) => {
    setShowOpenCard(true);
    setSelectedCardId(cardId);
  };

  const { userData } = useSelector(
    (store: {
      userInfo: {
        userData: IUserInfoData[];
        error: string;
      };
    }) => store.userInfo,
  );
  const { getUsers } = useActionCreator();

  useEffect(() => {
    try {
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const selectedCard = useMemo(
    () => userData.find((el) => el.id === selectedCardId),
    [selectedCardId, userData],
  );

  const sorted = userData.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <StyledWrap>
      <Filter handleChange={handleChange} />
      <StyledCards>
        {sorted.map(({ id, name, surname, phone, age }) => (
          <Card
            key={id}
            name={name}
            surname={surname}
            phone={phone}
            age={age}
            openSelectedCard={(e: { stopPropagation: () => void }) => {
              e.stopPropagation();
              openSelectedCard(id);
            }}
          />
        ))}
      </StyledCards>
      {showOpenCard ? (
        <DataUser selectedCard={selectedCard} closeOpenCard={closeOpenCard} />
      ) : null}
    </StyledWrap>
  );
};

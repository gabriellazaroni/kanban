import { useState } from 'react';
import {
  Container,
  BoardWrapper,
  Header,
  ImgLogo
} from './styles';
import { CardType, data } from '../../data';
import { DeleteContainer } from '../../components/DeleteContainer';
import { Column } from '../../components/Column';
import logo from '../../assets/logo.svg'

export function Home() {
  const [cards, setCards] = useState<CardType[]>(data);

  return (
    <Container>
      <Header>
        <ImgLogo src={logo} />
      </Header>
      <BoardWrapper>
        {['backlog', 'todo', 'doing', 'done'].map((column, i) => (
          <Column
            key={column}
            title={['Backlog', 'To do', 'In progress', 'Complete'][i]}
            column={column}
            cards={cards}
            setCards={setCards}
          />
        ))}
        <DeleteContainer setCards={setCards} />
      </BoardWrapper>
    </Container>
  );
};



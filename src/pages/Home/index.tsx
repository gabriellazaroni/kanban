import { useState } from 'react';
import {
  Container,
  BoardWrapper
} from './styles';
import { CardType, data } from '../../data';
import { DeleteContainer } from '../../components/DeleteContainer';
import { Column } from '../../components/Column';

export function Home() {
  const [cards, setCards] = useState<CardType[]>(data);

  return (
    <Container>
      <BoardWrapper>
        {['backlog', 'todo', 'doing', 'done'].map((column, i) => (
          <Column
            key={column}
            title={['Backlog', 'To do', 'In progress', 'Complete'][i]}
            headingColor={['#737373', '#b498cf', '#bfdbfe', '#a7f3d0'][i]}
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



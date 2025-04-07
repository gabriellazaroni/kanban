import { ChangeEvent, FormEvent, useState } from "react";
import { CardType } from "../../data";
import { AddCardForm, AddCardToggleButton, ButtonGroup, CloseButton, StyledTextArea, SubmitButton } from "./styles";

export interface AddCardProps {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const AddCard: React.FC<AddCardProps> = ({ column, setCards }) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newCard: CardType = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };
    setCards((prev) => [...prev, newCard]);
    setAdding(false);
    setText('');
  };

  return adding ? (
    <AddCardForm layout onSubmit={handleSubmit}>
      <StyledTextArea
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        autoFocus
        placeholder="Add new task..."
      />
      <ButtonGroup>
        <CloseButton type="button" onClick={() => setAdding(false)}>
          Close
        </CloseButton>
        <SubmitButton type="submit">
          Add
        </SubmitButton>
      </ButtonGroup>
    </AddCardForm>
  ) : (
    <AddCardToggleButton onClick={() => setAdding(true)}>
      Add card
    </AddCardToggleButton>
  );
};
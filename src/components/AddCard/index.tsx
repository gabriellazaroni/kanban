import { ChangeEvent, FormEvent, useState } from "react";
import { CardType } from "../../data";
import { AddCardForm } from "./styles";
import { FiPlus } from "react-icons/fi";

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
      <textarea
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        autoFocus
        placeholder="Add new task..."
      />
      <div style={{ marginTop: '0.375rem', display: 'flex', justifyContent: 'end', gap: '0.375rem' }}>
        <button type="button" onClick={() => setAdding(false)} style={{ fontSize: '0.75rem', color: '#000', padding: "10px", borderRadius: '0.375rem' }}>Close</button>
        <button type="submit" style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem', borderRadius: '0.375rem', background: '#fafafa', color: '#171717' }}>
          Add <FiPlus />
        </button>
      </div>
    </AddCardForm>
  ) : (
    <button
      onClick={() => setAdding(true)}
      style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.375rem 0.75rem', fontSize: '0.75rem', color: '#000', marginTop: "10px" }}
    >
      Add card <FiPlus />
    </button>
  );
};
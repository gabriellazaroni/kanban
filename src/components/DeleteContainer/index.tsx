import { DragEvent, useState } from "react";
import { CardType } from "../../data";
import { DeleteBox } from "./styles";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

interface BurnBarrelProps {
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const DeleteContainer: React.FC<BurnBarrelProps> = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData('cardId');
    setCards((pv) => pv.filter((c) => c.id !== cardId));
    setActive(false);
  };

  return (
    <DeleteBox
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      active={active}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </DeleteBox>

  );
}
import { CardType } from "../../data";
import { DropIndicator } from "../Dropindicator";
import { CardContainer } from "./styles";
import React, { DragEvent } from 'react';


interface CardProps extends CardType {
  handleDragStart: (e: DragEvent<HTMLDivElement>, card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({ title, id, column, handleDragStart }) => (
  <>
    <DropIndicator beforeId={id} column={column} />
    <CardContainer
      layout
      layoutId={id}
      draggable
      onDragStart={(e) =>
        handleDragStart(e as unknown as React.DragEvent<HTMLDivElement>, { title, id, column })
      }
    >
      <p style={{ fontSize: '0.875rem', color: '#f4f4f5' }}>{title}</p>
    </CardContainer>
  </>
);
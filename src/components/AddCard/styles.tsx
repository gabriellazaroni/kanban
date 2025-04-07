import { motion } from "framer-motion";
import styled from "styled-components";

export const AddCardForm = styled(motion.form)`
  textarea {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid #a78bfa;
    background: rgba(167, 139, 250, 0.2);
    padding: 0.75rem;
    font-size: 0.875rem;
    color: #fafafa;
    &::placeholder {
      color: #c4b5fd;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  font-size: 0.875rem;
  resize: none;
`;

export const ButtonGroup = styled.div`
  margin-top: 0.375rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
`;

export const CloseButton = styled.button`
  font-size: 0.75rem;
  color: #fff;
  padding: 10px;
  border-radius: 0.375rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  background: #fafafa;
  color: #171717;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const AddCardToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  color: #000;
  margin-top: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  font-weight: bold;

`;

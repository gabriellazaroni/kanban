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
import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  cursor: grab;
  border-radius: 0.375rem;
  border: 1px solid #3f3f3f;
  background: #27272a;
  padding: 12px;
  &:active {
    cursor: grabbing;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #f4f4f5;
`
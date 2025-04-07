import styled from "styled-components";

export const DropLine = styled.div<{ active?: boolean }>`
  height: 2px;
  width: 100%;
  margin: 6px 0;
  background: #a78bfa;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;
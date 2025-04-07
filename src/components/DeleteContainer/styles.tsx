import styled, { css } from "styled-components";

export const DeleteBox = styled.div<{ active: boolean }>`
  margin-top: 2.5rem;
  height: 14rem;
  width: 14rem;
  flex-shrink: 0;
  display: grid;
  place-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  font-size: 1.875rem;
  ${(props) =>
    props.active
      ? css`
          border-color: #7f1d1d;
          background: rgba(127, 29, 29, 0.2);
          color: #ef4444;
        `
      : css`
          border-color: #737373;
          background: rgba(115, 115, 115, 0.2);
          color: #737373;
        `}
`;
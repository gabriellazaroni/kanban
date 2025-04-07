import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 14rem;
  flex-shrink: 0;
`;

export const Header = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleColumn = styled.h3`
  color: #a584c5;
  padding-left: 10px;
`

interface CardContainerProps {
  active: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  height: 100%;
  padding: 0px 10px 10px 10px;
  background: ${({ active }) =>
    active ? 'rgba(38,38,38,0.5)' : 'transparent'};
`;
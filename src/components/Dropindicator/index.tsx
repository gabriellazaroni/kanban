import { DropLine } from "./styles";

interface DropIndicatorProps {
  beforeId: string | null;
  column: string;
}

export const DropIndicator: React.FC<DropIndicatorProps> = ({ beforeId, column }) => (
  <DropLine data-before={beforeId || '-1'} data-column={column} />
);
import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const Columns = styled.div`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const Layers = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
`;

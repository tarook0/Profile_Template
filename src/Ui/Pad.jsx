import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingSchema[padKey])
      .join(" ");
  }};
`;

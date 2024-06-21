import styled, { css } from "styled-components";
import { spacingSchema } from "../common/spaces";

const stretchMap = {
  all: `> *  { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

const responsive = css`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

export const InlineBundle = styled.div`
  --gutter: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: ${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
`;
export const Inline = styled(InlineBundle)`
  flex-wrap: nowrap;
  ${({ stretch }) => {
    if (typeof stretch === "number")
      return `> :nth-child(${stretch + 1}) { flex: 1 }`;

    return stretchMap[stretch] ?? "";
  }}

  ${({ switchAt }) => switchAt && responsive}
`;


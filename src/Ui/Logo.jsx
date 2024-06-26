import styled from "styled-components";

export const Logo = styled.div`
  --size: ${(props) => props.size};
  background: ${(props) => (props.inverse ? "#361f5d" : "white")};
  width: var(--size);
  height: var(--size);
  ${(props) => !props.square && "border-radius:50%;"}
`;

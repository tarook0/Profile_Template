import { styled } from "styled-components";
import { Pad } from "./Pad";
import { Inline } from "./Inline";


const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary ? "1px solid transparent" : "1px solid #361f5d"};
  background: ${(props) => (props.primary ? "#361f5d" : "white")};
  color: ${(props) => (props.primary ? "white" : "#361f5d")};
`;

const Controls = () => {
  return (
    <Inline as={Pad} padding="l" gutter="l" justify="end">
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </Inline>
  );
};

export default Controls;

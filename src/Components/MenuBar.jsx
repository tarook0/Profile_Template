import styled from "styled-components";
import { Inline } from "../Ui/Inline";
import { Pad } from "../Ui/Pad";
import { Logo } from "../Ui/Logo";

export const Menu = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  padding: ["m", "xl"],
  align: "center",
  stretch: 1,
}))`
  background-color: #210551;
  color: wheat;
  border-block-end: 1px solid #0c021e;
`;
const Item = styled(Pad).attrs(() => ({
  padding: ["s", "m"],
  as: "li",
}))`
  background: ${(props) => (props.active ? "#361f5d" : "tranparent")};
  border-radius: 0.25rem;
  list-style-type: none;
`;
const SearchBar = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  background: #361f5d;
  color: wheat;
  border: none;
`;
export default function MenuBar() {
  return (
    <div>
      <Menu>
        <Logo size="2.5rem" />
        <nav>
          <Inline gutter="s" as={"ul"}>
            <Item active>Overview</Item>
            <Item>Position</Item>
            <Item>Candidates</Item>
            <Item>Employer</Item>
          </Inline>
        </nav>
        <SearchBar placeholder="Search ... " />
        <Logo square size="1.5rem" />
        <Logo size="2.5rem" />
      </Menu>
    </div>
  );
}

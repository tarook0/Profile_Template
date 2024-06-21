import styled from "styled-components";
import { Inline } from "../Ui/Inline";
import { Pad } from "../Ui/Pad";

const Menu = styled(Inline).attrs(() => ({
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

export default function MenuBar() {
  return (
    <div>
      <Menu
        as={Pad}
        padding={["m", "xl"]}
        gutter="l"
        align="center"
        stretch={1}
      >
        <div>logo</div>
        <nav>
          <Inline gutter="s" as={"ul"}>
            <li>Overview</li>
            <li>Position</li>
            <li>Candidates</li>
            <li>Employer</li>
          </Inline>
        </nav>
        <input placeholder="search" />
        <div>icon</div>
        <div>Profile</div>
      </Menu>
    </div>
  );
}

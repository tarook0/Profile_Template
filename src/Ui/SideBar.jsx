import styled from "styled-components";
import { Layers } from "./Layers";
import { Logo } from "./Logo";
import { Inline } from "./Inline";
import { Pad } from "./Pad";

const SideMenu = styled(Layers).attrs(() => ({
  as: "ul",
  gutter: "m",
}))`
  list-style-type: none;
  padding-left: 0;
`;
const SideMenuItem = styled(Inline).attrs(() => ({
  as: Pad,
  padding: ["m", "l"],
  gutter: "l",
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active &&
    `
    border-inline-start-color:#324772;
    background:#1f29371c;
    `}
`;

export default function SideBar() {
  return (
    <Pad as='nav' padding={['l','none']}>
      <SideMenu>
        <SideMenuItem active>
          <Logo inverse square size="1rem" />
          Profile
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse square size="1rem" />
          Settings
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse square size="1rem" />
          Authentication
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse  size="1rem" />
          Email
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse  size="1rem" />
          Plans
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse square size="1rem" />
          Apis
        </SideMenuItem>
      </SideMenu>
    </Pad>
  );
}

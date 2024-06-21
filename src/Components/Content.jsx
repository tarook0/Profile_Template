import styled from "styled-components";
import { Pad } from "../Ui/Pad";
import { Split } from "../Ui/Splite";
import { Center } from "../Ui/Center";
import { Layers } from "../Ui/Layers";
import SideBar from "../Ui/SideBar";
import RightSide from "../Ui/RightSide";

const ContentArea = styled(Pad).attrs(() => ({
  padding: "xl",
}))`
  color: black;
  background-image: linear-gradient(
    to bottom,
    #210551 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.header`
  color: white;
`;
const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;
export default function Content() {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="80rem">
        <SettingsHeader>
          <h1> Tarek Profile </h1>
        </SettingsHeader>
        <SettingsPane>
          <SideBar />
          <RightSide/>
        </SettingsPane>
      </Center>
    </ContentArea>
  );
}

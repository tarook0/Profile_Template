import { Inline } from "../Ui/Inline";

export default function MenuBar() {
  return (
    <div>
      <Inline gutter="l" align="center" stretch={1}>
        <div>logo</div>
        <nav>
          <Inline gutter='s' as={'ul'}>
            <li>Overview</li>
            <li>Position</li>
            <li>Candidates</li>
            <li>Employer</li>
          </Inline>
        </nav>
        <input placeholder="search" />
        <div>icon</div>
        <div>Profile</div>
      </Inline>
    </div>
  );
}

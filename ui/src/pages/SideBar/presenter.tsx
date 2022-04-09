import { useState, VFC } from "react";
import { CodeView, Paper, SideBar, SideBarItem } from "components";

export const SideBarPresenter: VFC = () => {
  return (
    <>
      <Sample1 />
      <Sample2 />
      <Sample3 />
    </>
  );
};

const Sample1: VFC = () => {
  return (
    <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
      <SideBar>
        <SideBarItem to={"/"} label="URLと同じページ" />
        <SideBarItem to={"/SideBar/"} label="URLと異なるページ" />
      </SideBar>
      <CodeView code={SAMPLE_CODE_1} />
    </Paper>
  );
};
const SAMPLE_CODE_1 = `
<SideBar>
  <SideBarItem to={"/"} label="URLと同じページ" />
  <SideBarItem to={"/SideBar/"} label="URLと異なるページ" />
</SideBar>
`;

const Sample2: VFC = () => {
  return (
    <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
      <SideBar>
        <SideBarItem to={"/"} label="線なし" />
        <SideBarItem to={"/"} textDecration="underline" label="下線あり" />
        <SideBarItem to={"/"} textDecration="overline" label="上線あり" />
      </SideBar>
      <CodeView code={SAMPLE_CODE_2} />
    </Paper>
  );
};
const SAMPLE_CODE_2 = `
<SideBar>
  <SideBarItem to={"/"} label="線なし" />
  <SideBarItem to={"/"} textDecration="underline" label="下線あり" />
  <SideBarItem to={"/"} textDecration="overline" label="上線あり" />
</SideBar>
`;

const Sample3: VFC = () => {
  const [isClicked, setIsClicked] = useState<number | null>(null);

  return (
    <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
      <SideBar>
        <SideBarItem
          to={"/SideBar/"}
          onClick={() => setIsClicked(1)}
          label="クリックイベント1"
          off
        />
        <SideBarItem
          to={"/SideBar/"}
          onClick={() => setIsClicked(2)}
          label="クリックイベント2"
          off
        />
        <SideBarItem
          to={"/SideBar/"}
          onClick={() => setIsClicked(3)}
          label="クリックイベント3"
          off
        />
      </SideBar>
      <CodeView code={SAMPLE_CODE_3} />
      <Paper variant="outlined" sx={{ mt: 2, p: 2 }}>
        クリックされたイベント
        <br />
        {isClicked ? isClicked : "null"}
      </Paper>
    </Paper>
  );
};

const SAMPLE_CODE_3 = `
<SideBar>
  <SideBarItem
    to={"/SideBar/"}
    onClick={() => setIsClicked(1)}
    label="クリックイベント1"
  />
  <SideBarItem
    to={"/SideBar/"}
    onClick={() => setIsClicked(2)}
    label="クリックイベント2"
  />
  <SideBarItem
    to={"/SideBar/"}
    onClick={() => setIsClicked(3)}
    label="クリックイベント3"
  />
</SideBar>
`;

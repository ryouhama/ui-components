import { VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PublicRouter } from "./routes";
import { AppLayout, Flex, SideBar, SideBarItem } from "components";
import "./App.css";

export const App: VFC = () => {
  const pageList = [
    { path: "/Home/", name: "ホーム" },
    { path: "/SideBar/", name: "サイドバー" },
    { path: "/CodeView/", name: "コードビュー" },
    { path: "/Flex/", name: "フレックス" },
  ];

  return (
    <BrowserRouter>
      <AppLayout>
        <Flex>
          <SideBar>
            {pageList.map((page, index) => (
              <SideBarItem key={index} to={page.path} label={page.name} />
            ))}
          </SideBar>
          <PublicRouter />
        </Flex>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;

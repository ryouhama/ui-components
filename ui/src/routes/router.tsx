import { VFC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "pages/Home";
import { SideBar } from "pages/SideBar";
import { CodeView } from "pages/CodeView";
import { PageLayout } from "components/Layout";

export const PublicRouter: VFC = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SideBar/" element={<SideBar />} />
        <Route path="/CodeView/" element={<CodeView />} />
        <Route path="/" element={<Navigate to={"/Home/"} />} />
      </Routes>
    </PageLayout>
  );
};

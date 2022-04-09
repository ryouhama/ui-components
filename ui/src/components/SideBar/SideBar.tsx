import { List } from "@mui/material";
import { MinPageWidth, useAppLayoutContext } from "components/Layout";
import { VFC, PropsWithChildren, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MaxWidthSize } from "./const";
import { SideBarContext } from "./context";

type Props = {};

export const SideBar: VFC<PropsWithChildren<Props>> = (props) => {
  const { children } = props;
  const location = useLocation();

  const { size } = useAppLayoutContext();

  const isSelected = useCallback(
    (to: string) => to === location.pathname,
    [location.pathname]
  );

  const contextValue = {
    isSelected: isSelected,
  };

  // 最小のページ幅以上の場合、サイドバーを表示する
  const isOpen = size.width >= MinPageWidth;

  const style = {
    minWidth: isOpen ? MaxWidthSize : 0,
  };

  return (
    <>
      {isOpen && (
        <SideBarContext.Provider value={contextValue}>
          <List style={style}>{children}</List>
        </SideBarContext.Provider>
      )}
    </>
  );
};

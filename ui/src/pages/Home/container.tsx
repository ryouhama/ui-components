import { VFC, PropsWithChildren } from "react";
import { HomePresenter as Home } from "./persenter";

type Props = {};

export const HomeContainer: VFC<PropsWithChildren<Props>> = (props) => {
  const { children } = props;

  return <Home>{children}</Home>;
};

import { PropsWithChildren, VFC } from "react";
import Box from "@mui/material/Box";
import { useAppLayoutContext } from "..";
import { MaxWidthSize } from "components/SideBar";

type Props = {};

export const PageLayout: VFC<PropsWithChildren<Props>> = (props) => {
  const { children } = props;

  const { size } = useAppLayoutContext();
  const sx = {
    width: size.width - MaxWidthSize,
    m: 2,
    p: 2,
  };

  return <Box sx={sx}>{children}</Box>;
};

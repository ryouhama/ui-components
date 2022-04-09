import { VFC, PropsWithChildren } from "react";
import MuiPaper, { PaperProps } from "@mui/material/Paper";

type Props = {} & PaperProps;

export const Paper: VFC<PropsWithChildren<Props>> = (props) => {
  const { children, ...otherProps } = props;
  return <MuiPaper {...otherProps}>{children}</MuiPaper>;
};

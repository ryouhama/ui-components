import { VFC, PropsWithChildren } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { FlexDirectionType } from "./type";

type Props = {
  flexDirection?: FlexDirectionType;
} & BoxProps;

export const Flex: VFC<PropsWithChildren<Props>> = (props) => {
  const { flexDirection = "row", children, ...otherProps } = props;

  const sx = {
    display: "flex",
    flexDirection: flexDirection,
  };

  return (
    <Box sx={sx} {...otherProps}>
      {children}
    </Box>
  );
};

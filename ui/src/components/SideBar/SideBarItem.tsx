import { HTMLAttributes, VFC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@mui/material";
import { TextDecration } from "./type";
import { useSideBarContext } from "./context";

export type SideBarItemProps = {
  to: string;
  label: string;
  textDecration?: TextDecration;
  onClick?: () => void;
  off?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const SideBarItem: VFC<SideBarItemProps> = (props) => {
  const {
    to,
    label,
    textDecration = "none",
    children,
    onClick,
    off,
    ...otherProps
  } = props;

  const { isSelected } = useSideBarContext();

  const isSelectedSideBar = isSelected(to);

  const handleClick = () => onClick && onClick();

  const style = {
    link: {
      textDecoration: textDecration,
      display: "block",
    },
    item: {
      backgroundColor: isSelectedSideBar ? "#F0F7FF" : "#FFFFF",
      color: isSelectedSideBar ? "#0072E5" : "#3E5060",
    },
  };

  return (
    <>
      {off ? (
        <div
          className={otherProps.className}
          style={style.link}
          onClick={handleClick}
        >
          <ListItem button sx={style.item}>
            <ListItemText primary={label} />
          </ListItem>
        </div>
      ) : (
        <Link
          className={otherProps.className}
          to={to}
          style={style.link}
          onClick={handleClick}
        >
          <ListItem button sx={style.item}>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      )}
    </>
  );
};

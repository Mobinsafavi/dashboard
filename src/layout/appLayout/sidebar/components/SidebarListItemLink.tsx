import style from "./SidebarListItemLink.module.scss";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import { ISidebarItemsProps } from "../constant/sidebarItems";
import { useAppSelector } from "../../../../hooks/storeHook";

interface ISidebarListItemLinkProps {
  item: ISidebarItemsProps;
}

const SidebarListItemLink: FC<ISidebarListItemLinkProps> = ({ item }) => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
  const { href, icon, name } = item;

  return (
    <NavLink
      to={href as string}
      className={({ isActive }) =>
        isActive ? style["sidebar__link--active"] : style["sidebar__link"]
      }
    >
      <ListItemButton
        sx={
          isSidebarOpen
            ? { my: 1 }
            : { minWidth: "65px", maxWidth: "65px", my: 1 }
        }
        className={style["sidebar__list-item"]}
      >
        <Box className={style["icon-container"]}>
          <ListItemIcon
            sx={{
              minWidth: "3.2rem !important",
              aspectRatio: "1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </ListItemIcon>
        </Box>
        {isSidebarOpen ? (
          <ListItemText sx={{ marginLeft: "1.2rem" }}>
            <Typography variant="body1" className="font-weight-medium">
              {name}
            </Typography>
          </ListItemText>
        ) : null}
      </ListItemButton>
    </NavLink>
  );
};

export default SidebarListItemLink;

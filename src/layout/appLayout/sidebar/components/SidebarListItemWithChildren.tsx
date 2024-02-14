import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import style from "./SidebarListItemWithChildren.module.scss";
import { NavLink } from "react-router-dom";
import React, { FC, useState } from "react";
import { ISidebarItemsProps } from "../constant/sidebarItems";
import { useAppSelector } from "../../../../hooks/storeHook";

interface ISidebarListItemWithChildrenProps {
  item: ISidebarItemsProps;
}

const SidebarListItemWithChildren: FC<ISidebarListItemWithChildrenProps> = ({
  item,
}) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
  const handleClick = (id: string) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const { name, icon, children } = item;

  return (
    <>
      <Box className={style["sidebar__link"]}>
        <ListItemButton
          sx={
            isSidebarOpen
              ? { my: 1 }
              : { minWidth: "65px", maxWidth: "65px", my: 1 }
          }
          className={style["sidebar__list-item"]}
          onClick={() => handleClick(name)}
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
      </Box>
      <Collapse
        in={open[name]}
        timeout="auto"
        unmountOnExit
        sx={isSidebarOpen ? null : { pl: 2 }}
      >
        <List component="div" disablePadding>
          {children &&
            children.map((subItem) => {
              return subItem.href ? (
                <NavLink
                  to={subItem.href}
                  className={({ isActive }) =>
                    isActive
                      ? style["sidebar__link--active"]
                      : style["sidebar__link"]
                  }
                >
                  <ListItemButton
                    sx={
                      isSidebarOpen
                        ? { my: 1, pl: 4 }
                        : { my: 1, minWidth: "65px", maxWidth: "65px" }
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
                        {subItem.icon}
                      </ListItemIcon>
                    </Box>
                    {isSidebarOpen ? (
                      <ListItemText sx={{ marginLeft: "1.2rem" }}>
                        <Typography
                          variant="body1"
                          className="font-weight-medium"
                        >
                          {subItem.name}
                        </Typography>
                      </ListItemText>
                    ) : null}
                  </ListItemButton>
                </NavLink>
              ) : null;
            })}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarListItemWithChildren;

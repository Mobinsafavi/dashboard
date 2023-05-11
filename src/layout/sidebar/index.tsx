import React from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";
import sidebarData from "./constant/sidebarData";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            sx={{ backgroundColor: "inherit" }}
            id="nested-list-subheader"
          >
            App Sidebar
          </ListSubheader>
        }
      >
        <>
          {sidebarData.map((item) => {
            return item.children ? (
              <>
                <Box className={style["sidebar-link"]}>
                  <ListItemButton
                    sx={{ my: 1 }}
                    className={style["sidebar-list-item"]}
                    onClick={handleClick}
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
                        {item.icon}
                      </ListItemIcon>
                    </Box>
                    <ListItemText sx={{ marginLeft: "1.2rem" }}>
                      <Typography variant="body1" className="font-weight-bold">
                        {item.name}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Box>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((subItem) => {
                      return subItem.href ? (
                        <NavLink
                          to={subItem.href}
                          className={({ isActive }) =>
                            isActive
                              ? style["active-link"]
                              : style["sidebar-link"]
                          }
                        >
                          <ListItemButton
                            sx={{ my: 1, pl: 4 }}
                            className={style["sidebar-list-item"]}
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
                            <ListItemText sx={{ marginLeft: "1.2rem" }}>
                              <Typography
                                variant="body1"
                                className="font-weight-bold"
                              >
                                {subItem.name}
                              </Typography>
                            </ListItemText>
                          </ListItemButton>
                        </NavLink>
                      ) : null;
                    })}
                  </List>
                </Collapse>
              </>
            ) : !item.children && item.href ? (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? style["active-link"] : style["sidebar-link"]
                }
              >
                <ListItemButton
                  sx={{ my: 1 }}
                  className={style["sidebar-list-item"]}
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
                      {item.icon}
                    </ListItemIcon>
                  </Box>
                  <ListItemText sx={{ marginLeft: "1.2rem" }}>
                    <Typography variant="body1" className="font-weight-bold">
                      {item.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </NavLink>
            ) : null;
          })}
        </>
      </List>
    </Box>
  );
};

export default Sidebar;

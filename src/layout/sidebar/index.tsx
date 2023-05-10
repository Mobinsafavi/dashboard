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
import { Children } from "../../config/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faInfo } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

interface ISidebarData {
  name: string;
  href: string;
  icon: Children;
  children?: ISidebarData[];
}

const Sidebar = () => {
  const sidebarData: ISidebarData[] = [
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: <FontAwesomeIcon icon={faHeadphones} />,
    },
    {
      name: "About Us",
      href: "/about-us",
      icon: <FontAwesomeIcon icon={faInfo} />,
    },
  ];

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
              <Collapse timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((subItem) => (
                    <NavLink
                      to={item.href}
                      // className={({ isActive, isPending }) =>
                      //   isActive ? style["active-link"] : style["sidebar-link"]
                      // }
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="body1"
                            className="font-weight-medium"
                          >
                            {subItem.name}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  ))}
                </List>
              </Collapse>
            ) : (
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isActive ? style["active-link"] : style["sidebar-link"]
                }
              >
                <ListItemButton
                  sx={{ my: 1 }}
                  className={style["sidebar-list-item"]}
                >
                  <Box>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </Box>
                  <ListItemText>
                    <Typography variant="body1" className="font-weight-bold">
                      {item.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </NavLink>
            );
          })}
        </>
      </List>
    </Box>
  );
};

export default Sidebar;

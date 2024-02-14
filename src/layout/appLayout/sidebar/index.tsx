import React from "react";
import { Box, List, ListSubheader } from "@mui/material";
import sidebarItems from "./constant/sidebarItems";
import ContactMeBox from "./components/ContactMeBox";
import SidebarListItemLink from "./components/SidebarListItemLink";
import SidebarListItemWithChildren from "./components/SidebarListItemWithChildren";

const Sidebar = () => {
  return (
    <Box width="80%">
      <List
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
        {sidebarItems.map((item) => {
          const isItemHaveChildren = item.children && !item.href;

          return isItemHaveChildren ? (
            <SidebarListItemWithChildren
              item={{
                name: item.name,
                icon: item.icon,
                children: item.children,
              }}
            />
          ) : !isItemHaveChildren ? (
            <SidebarListItemLink
              item={{ name: item.name, icon: item.icon, href: item.href }}
            />
          ) : null;
        })}
      </List>
      <ContactMeBox />
    </Box>
  );
};

export default Sidebar;

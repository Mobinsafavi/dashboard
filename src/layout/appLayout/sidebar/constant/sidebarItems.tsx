import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClipboardList,
  faFlag,
  faList,
  faCirclePlus,
  faTableColumns,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Children } from "../../../../config/types";
import { urls } from "../../../../constants/urls";
import { faTrello } from "@fortawesome/free-brands-svg-icons";

export interface ISidebarItemsProps {
  name: string;
  href?: string;
  icon: Children;
  children?: ISidebarItemsProps[];
}

const sidebarItems: ISidebarItemsProps[] = [
  {
    name: "Dashboard",
    href: urls.app.dashboard,
    icon: <FontAwesomeIcon size="xl" icon={faTableColumns} />,
  },
  {
    name: "Backlog",
    icon: <FontAwesomeIcon size="xl" icon={faList} />,
    children: [
      {
        name: "list",
        href: urls.app.tasks.list,
        icon: <FontAwesomeIcon size="xl" icon={faClipboardList} />,
      },
      {
        name: "create",
        href: urls.app.tasks.add,
        icon: <FontAwesomeIcon size="xl" icon={faCirclePlus} />,
      },
    ],
  },
  {
    name: "Projects",
    icon: <FontAwesomeIcon size="xl" icon={faBriefcase} />,
    children: [
      {
        name: "list",
        href: urls.app.projects.list,
        icon: <FontAwesomeIcon size="xl" icon={faClipboardList} />,
      },
      {
        name: "create",
        href: urls.app.projects.add,
        icon: <FontAwesomeIcon size="xl" icon={faCirclePlus} />,
      },
    ],
  },
  {
    name: "Users",
    icon: <FontAwesomeIcon size="xl" icon={faUser} />,
    children: [
      {
        name: "list",
        href: urls.app.users.list,
        icon: <FontAwesomeIcon size="xl" icon={faClipboardList} />,
      },
      {
        name: "create",
        href: urls.app.users.add,
        icon: <FontAwesomeIcon size="xl" icon={faCirclePlus} />,
      },
    ],
  },
  {
    name: "Kanban",
    href: urls.app.kanban,
    icon: <FontAwesomeIcon size="xl" icon={faTrello as IconDefinition} />,
  },
  {
    name: "DOD Setup",
    href: urls.app.dodSetup,
    icon: <FontAwesomeIcon size="xl" icon={faFlag} />,
  },
];

export default sidebarItems;

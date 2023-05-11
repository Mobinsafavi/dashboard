import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsTurnToDots,
  faCalendarDays,
  faHeadphones,
  faList,
  faTableColumns,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import { Children } from "../../../config/types";

interface ISidebarData {
  name: string;
  href?: string;
  icon: Children;
  children?: ISidebarData[];
}

const sidebarData: ISidebarData[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: <FontAwesomeIcon size="xl" icon={faTableColumns} />,
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    icon: <FontAwesomeIcon size="xl" icon={faHeadphones} />,
  },
  {
    name: "To Do",
    icon: <FontAwesomeIcon size="xl" icon={faArrowsTurnToDots} />,
    children: [
      {
        name: "Calender",
        href: "/to-do/calender",
        icon: <FontAwesomeIcon size="xl" icon={faCalendarDays} />,
      },
      {
        name: "Time Line",
        href: "/to-do/time-line",
        icon: <FontAwesomeIcon size="xl" icon={faTimeline} />,
      },
      {
        name: "To Do List",
        href: "/to-do/list",
        icon: <FontAwesomeIcon size="xl" icon={faList} />,
      },
    ],
  },
];

export default sidebarData;

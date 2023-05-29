import English from "./en.json";
import Farsi from "./fas.json";

const locales = [
  {
    locale: "en",
    path: "./en_UK.json",
    default: true,
    flag: "/images/flags/United-Kingdom.png",
    title: "English",
    direction: "ltr",
    messages: English,
  },
  {
    locale: "ar",
    path: "./ar_SA.json",
    flag: "/images/flags/Saudi-Arabia.png",
    title: "العربية",
    direction: "rtl",
    messages: Farsi,
  },
];

export default locales;

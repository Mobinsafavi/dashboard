import { Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemePopoverAnchor = () => {
  const anchorItems = [
    {
      title: "Light",
      icon: (
        <FontAwesomeIcon icon={faSun} size="xl" color="rgb(103, 116, 142)" />
      ),
    },
    {
      title: "Dark",
      icon: (
        <FontAwesomeIcon icon={faMoon} size="xl" color="rgb(103, 116, 142)" />
      ),
    },
  ];

  return (
    <Stack direction="column" spacing={2} pl={5}>
      {anchorItems.map((item) => (
        <Stack direction="row-reverse" spacing={3} alignItems="center">
          {item.icon}
          <Typography
            variant="body1"
            className="font-weight-bold"
            color="secondary"
          >
            {item.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default ThemePopoverAnchor;

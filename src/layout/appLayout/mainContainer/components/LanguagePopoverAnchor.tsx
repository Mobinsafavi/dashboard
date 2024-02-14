import { Stack, Typography } from "@mui/material";
import saudiArabia from "../../../../../public/images/Saudi-Arabia.png";
import unitedKingdom from "../../../../../public/images/United-Kingdom.png";

const LanguagePopoverAnchor = () => {
  const anchorItems = [
    {
      title: "English",
      icon: (
        <img
          src={unitedKingdom}
          alt="unitedKingdomFlag"
          style={{ borderRadius: "1.8rem" }}
        />
      ),
    },
    {
      title: "Arabic",
      icon: (
        <img
          src={saudiArabia}
          alt="saudiArabiaFlag"
          style={{ borderRadius: "1.8rem" }}
        />
      ),
    },
  ];

  return (
    <Stack direction="column" spacing={2} pl={3}>
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

export default LanguagePopoverAnchor;

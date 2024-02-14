import { Children } from "../../config/types";
import { IconButton, Popover } from "@mui/material";
import { FC, useState, MouseEvent } from "react";

interface ICustomPopoverProps {
  buttonContent: Children;
  anchorContent: Children;
  name: string;
}

const CustomPopover: FC<ICustomPopoverProps> = ({
  name,
  buttonContent,
  anchorContent,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton aria-describedby={name} onClick={handleClick}>
        {buttonContent}
      </IconButton>
      <Popover
        PaperProps={{
          style: {
            borderRadius: "1.6rem",
            boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem;",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={name}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {anchorContent}
      </Popover>
    </>
  );
};

export default CustomPopover;

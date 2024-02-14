import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "./ContactMeBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHook";
import { FC } from "react";
import { BoxProps } from "@mui/material/Box/Box";
import { sidebarOpenHandler } from "../../../../store/sidebar/sidebarSlice";
import { urls } from "../../../../constants/urls";
const ContactMeBox: FC<BoxProps> = ({ ...props }) => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box
      {...props}
      p={2}
      sx={
        isSidebarOpen
          ? {}
          : { cursor: "pointer", minWidth: "65px", maxWidth: "65px" }
      }
      className={style["contact-me-box__container"]}
      onClick={() => {
        dispatch(sidebarOpenHandler());
      }}
    >
      <Grid container>
        <Grid
          item
          xs={3}
          className={style["contact-me-box__container__items-container"]}
        >
          <Box
            sx={
              isSidebarOpen
                ? {
                    padding: 1,
                    mb: 2,
                  }
                : { padding: 1 }
            }
            className={
              style[
                "contact-me-box__container__items-container__Message-icon-container"
              ]
            }
          >
            <FontAwesomeIcon size="xl" icon={faMessage} />
          </Box>
        </Grid>
        {isSidebarOpen ? (
          <>
            <Grid
              item
              xs={12}
              className={style["contact-me-box__container__items-container"]}
            >
              <Stack direction="column">
                <Typography
                  variant="h6"
                  className="font-weight-bold"
                  color="white"
                >
                  Any question?
                </Typography>
                <Typography
                  variant="caption"
                  className="font-weight-bold"
                  color="white"
                  sx={{ mb: 2 }}
                >
                  Write me a message
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              className={style["contact-me-box__container__items-container"]}
            >
              <Button
                variant="contained"
                color="info"
                className={
                  style[
                    "contact-me-box__container__items-container__action-button"
                  ]
                }
                onClick={() => {
                  navigate(urls.app.contactUs);
                }}
              >
                <Typography
                  variant="caption"
                  className="font-weight-bold"
                  color="primary"
                >
                  CONTACT ME
                </Typography>
              </Button>
            </Grid>
          </>
        ) : null}
      </Grid>
    </Box>
  );
};

export default ContactMeBox;

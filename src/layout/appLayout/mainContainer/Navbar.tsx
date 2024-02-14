import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faGlobe,
  faMagnifyingGlass,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import CustomBreadCrumb from "../../../components/common/CustomBreadCrumb";
import { sidebarToggleHandler } from "../../../store/sidebar/sidebarSlice";
import { useAppDispatch } from "../../../hooks/storeHook";
import TextInput from "../../../components/common/inputs/TextInput";
import CustomPopover from "../../../components/common/CustomPopover";
import CustomPaper from "../../../components/common/CustomPaper";
import ThemePopoverAnchor from "./components/ThemePopoverAnchor";
import LanguagePopoverAnchor from "./components/LanguagePopoverAnchor";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "info",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={4}
        sx={{
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
        }}
      >
        <CustomBreadCrumb />
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            ml: 8,
          }}
        >
          <IconButton
            color="primary"
            component="label"
            onClick={() => dispatch(sidebarToggleHandler())}
          >
            <FontAwesomeIcon size="lg" icon={faBars} />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} my={3}>
        <TextInput
          id="outlined-start-adornment"
          placeholder="search..."
          InputProps={{
            startAdornment: (
              <Box mr={1}>
                <FontAwesomeIcon
                  color="rgb(52, 71, 103)"
                  icon={faMagnifyingGlass}
                />
              </Box>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={4}
        sx={{ justifyContent: { xs: "center", md: "end" } }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <CustomPopover
            buttonContent={
              <FontAwesomeIcon icon={faMoon} color="rgb(52, 71, 103)" />
            }
            anchorContent={
              <Box p={2}>
                <ThemePopoverAnchor />
              </Box>
            }
            name={"theme-popover"}
          />
          <CustomPopover
            buttonContent={
              <FontAwesomeIcon color="rgb(52, 71, 103)" icon={faGlobe} />
            }
            anchorContent={
              <Box p={2}>
                <LanguagePopoverAnchor />
              </Box>
            }
            name={"language-popover"}
          />
          <div>
            <Stack direction="row" alignItems="center" spacing={1}>
              <div>
                <FontAwesomeIcon
                  color="rgb(52, 71, 103)"
                  size="xl"
                  icon={faCircleUser}
                />
              </div>
              <div>
                <Typography
                  variant="body1"
                  className="font-weight-medium"
                  color="secondary"
                >
                  Sign in
                </Typography>
              </div>
            </Stack>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Navbar;

import { Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  footerLinksArray,
  footerSocialLinksArray,
} from "../../userLayout/constants";

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="secondary">
          © 2023, made by Mobin Safavi for a better web.
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <List
          component="nav"
          aria-labelledby="main navigation"
          sx={{ display: "flex" }}
        >
          {footerLinksArray.map((item) => (
            <ListItem key={item.url} disablePadding sx={{ mx: 2 }}>
              <Link to={item.url} className="text-decoration-none">
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={4}
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", md: "end" },
        }}
      >
        {footerSocialLinksArray.map((item) => (
          <Grid item key={Math.random()}>
            <Grid
              item
              sx={{
                width: "2.2rem",
                height: "2.2rem",
                color: "rgb(131, 146, 171)",
              }}
            >
              <Link to={item.url}>{item.icon}</Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;

import { Grid, List, ListItem, Typography } from "@mui/material";

const Footer = () => {
  const footerList = [
    { name: " About US", url: "" },
    { name: "Contact Us", url: "" },
  ];
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="body1" color="secondary">
          © 2023, made by Mobin Safavi for a better web.
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={6}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <List
          component="nav"
          aria-labelledby="main navigation"
          sx={{ display: "flex" }}
        >
          {footerList.map((item) => (
            <ListItem key={item.url} disablePadding sx={{ ml: 2 }}>
              <Typography
                variant="body1"
                color="secondary"
                sx={{ whiteSpace: "nowrap" }}
              >
                {item.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;

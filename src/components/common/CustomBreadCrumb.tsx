import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { urls } from "../../constants/urls";

const CustomBreadCrumb = () => {
  const location = useLocation();

  const locationsArray = location.pathname.split("/").slice(2);
  const urlGenerator = (index: number) => {
    const urlArray = ["app"];
    for (let i = 0; i < index + 1; i++) {
      urlArray.push(locationsArray[i]);
    }
    return `/${urlArray.join("/")}`;
  };

  return (
    <Stack direction="column" spacing={1} justifyContent="center">
      <Breadcrumbs aria-label="Breadcrumb">
        <Link to={urls.app.dashboard}>
          <FontAwesomeIcon icon={faHouse} color="rgb(103, 116, 142)" />
        </Link>
        {locationsArray.map((item, index) => {
          return (
            <Link className="text-decoration-none" to={urlGenerator(index)}>
              <Typography
                variant="body1"
                color={
                  index + 1 === locationsArray.length ? "primary" : "secondary"
                }
              >
                {item.toUpperCase()}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
      <Typography variant="h6" className="font-weight-bold" color="primary">
        {locationsArray[locationsArray.length - 1].toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default CustomBreadCrumb;

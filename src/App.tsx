import { RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";

import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { router } from "./routes";
import { IconButton, Slide } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const { message, locale } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  const SnackBarCloseButton = ({ key }: { key: SnackbarKey }) => {
    const { closeSnackbar } = useSnackbar();
    return (
      <IconButton
        className="text-white"
        size="small"
        onClick={() => closeSnackbar(key)}
      >
        <FontAwesomeIcon icon={faXmark} color="rgb(103, 116, 142)" />
      </IconButton>
    );
  };

  return (
    <IntlProvider locale={locale} messages={message}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={Slide}
        action={(key) => <SnackBarCloseButton key={key} />}
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </IntlProvider>
  );
}

export default App;

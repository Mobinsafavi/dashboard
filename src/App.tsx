import { useState } from "react";
import MainLayout from "./layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import store from "./store";
import dashboardTheme from "./constants/theme";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

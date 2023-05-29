import { useState } from "react";
import MainLayout from "./layout";
import { Provider } from "react-redux";
import store from "./store";
import { FormattedMessage, IntlProvider } from "react-intl";
import farsi from "../src/lang/fas.json";
import english from "../src/lang/en.json";

import { useAppSelector, useAppDispatch } from "./hooks/storeHook";
function App() {
  // const [count, setCount] = useState(0);

  const message = useAppSelector((state) => state.language.message);
  console.log(message);
  const dispatch = useAppDispatch();

  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={message}>
        <p>
          <FormattedMessage id="key" />
        </p>
        <MainLayout />
      </IntlProvider>
    </Provider>
  );
}

export default App;

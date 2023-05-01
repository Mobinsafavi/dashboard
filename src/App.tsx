import { useState } from "react";
import MainLayout from "./layout";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;

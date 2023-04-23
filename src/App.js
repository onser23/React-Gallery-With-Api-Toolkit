import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store/store";
import Home from "./screens/Home";

const App = () => {
  // console.log(store.getState());
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

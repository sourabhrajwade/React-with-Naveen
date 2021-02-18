import React from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./common/services/ReduxService";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles/global.scss";
import Main from "./pages/Main";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>
);

export default App;

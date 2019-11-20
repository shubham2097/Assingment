import React, { Component } from "react";
import Home from "./components/Home";
import { store } from "./components/Store";
import Table from "./components/Table";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/table" component={Table} />
              <Route path="/" render={() => <Redirect to="/home" push />} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
export default App;

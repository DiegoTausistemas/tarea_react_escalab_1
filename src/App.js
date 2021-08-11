import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Welcome} exact />
        </Switch>
      </div>
    );
  }
}

export default App;

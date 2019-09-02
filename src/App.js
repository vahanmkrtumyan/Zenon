import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../src/style/scss/main.scss";
import Hompage from "./Hompage";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Hompage} exact />
        <Route path="/Services" component={Services} />
        <Services />
      </Switch>
    </div>
  );
}

export default App;

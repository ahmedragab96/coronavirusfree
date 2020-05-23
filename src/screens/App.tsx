import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PostALink from "./PostALink";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/post" component={PostALink} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
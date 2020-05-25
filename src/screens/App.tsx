import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PostALink from "./PostALink";
import AdminDashboard from "./admin-dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/post" component={PostALink} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

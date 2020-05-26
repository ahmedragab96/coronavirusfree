import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PostALink from "./PostALink";
import AdminDashboard from "./admin-dashboard";
import FourOFour from "./FourOFour";
import PostSent from "./PostSent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/post" component={PostALink} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/sent" component={PostSent} />
        <Route component={FourOFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

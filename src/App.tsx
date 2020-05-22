import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import AddUser from "./components/Dashboard/AddUser";

import Header from "./components/Dashboard/Header";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/create/user" exact component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

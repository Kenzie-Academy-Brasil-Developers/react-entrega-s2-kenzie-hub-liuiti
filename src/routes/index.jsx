import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/register">
        <Register auth={auth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;

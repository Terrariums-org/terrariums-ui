import { Route, Switch } from "wouter";
import { Login } from "../pages/Login/page/Login";

export const IndexRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
};

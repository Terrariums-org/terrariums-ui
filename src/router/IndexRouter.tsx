import { Route, Switch } from "wouter";
import { Login } from "../pages/Login/page/Login";
import { Register } from "../pages/Register/page/Register";

export const IndexRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register}/>
    </Switch>
  );
};

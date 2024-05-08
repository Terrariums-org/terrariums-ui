import { Route, Switch } from "wouter";
import { Login } from "../pages/Login/page/Login";
import { Register } from "../pages/Register/page/Register";
import { TerrariumList } from "../pages/TerrariumList/TerrariumList";

export const IndexRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={TerrariumList} />
    </Switch>
  );
};

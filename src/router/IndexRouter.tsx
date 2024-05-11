import { Route, Switch } from "wouter";
import { Login } from "../pages/Login/page/Login";
import { Register } from "../pages/Register/page/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { DashboardProvider } from "../pages/Dashboard/context/DashboardContext";

export const IndexRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <DashboardProvider>
        <Route path="/dashboard" component={Dashboard} />
      </DashboardProvider>
    </Switch>
  );
};

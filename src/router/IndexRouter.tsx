import { Route, Switch } from "wouter";
import { Login } from "../pages/Login/page/Login";
import { Register } from "../pages/Register/page/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { DashboardProvider } from "../pages/Dashboard/context/DashboardContext";
import { PrivateRoute } from "./PrivateRouter/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";

export const IndexRouter = () => {
  const { token, id } = useSelector((state: RootState) => state.auth);
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <DashboardProvider>
        <PrivateRoute path="/dashboard" token={token} id={id}>
          <Dashboard />
        </PrivateRoute>
      </DashboardProvider>
    </Switch>
  );
};

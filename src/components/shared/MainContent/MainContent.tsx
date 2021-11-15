import { Redirect, Route, Switch } from "react-router";

import Welcome from "../../pages/Welcome/Welcome";
import VisitSpots from "../../pages/VisitSpots/VisitSpots";
import Counties from "../../pages/Counties/Counties";
import TripTool from "../../pages/TripTool/TripTool";
import Traditions from "../../pages/Traditions/Traditions";
import Login from "../../pages/Login/Login";
import CountyDetails from "../../pages/Counties/CountyDetails/CountyDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";

const MainContent = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentification.isUserAuthenticated
  );

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {isAuthenticated && (
        <Route path="/welcome">
          <Welcome />
        </Route>
      )}
      {isAuthenticated && (
        <Route path="/visit-spots">
          <VisitSpots />
        </Route>
      )}
      {isAuthenticated && (
        <Route path="/counties" exact>
          <Counties />
        </Route>
      )}
      {isAuthenticated && (
        <Route path="/counties/:name">
          <CountyDetails />
        </Route>
      )}
      {isAuthenticated && (
        <Route path="/trip-tool">
          <TripTool />
        </Route>
      )}
      {isAuthenticated && (
        <Route path="/traditions">
          <Traditions />
        </Route>
      )}
      <Route path="/*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default MainContent;

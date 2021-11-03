import { Redirect, Route, Switch } from "react-router";

import Welcome from "../../pages/Welcome/Welcome";
import VisitSpots from "../../pages/VisitSpots/VisitSpots";
import Counties from "../../pages/Counties/Counties";
import TripTool from "../../pages/TripTool/TripTool";
import CountieDetails from "../../pages/CountieDetails/CountyDetails";

const MainContent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/visit-spots">
        <VisitSpots />
      </Route>
      <Route path="/counties" exact>
        <Counties />
      </Route>
      <Route path="/counties/:name">
        <CountieDetails />
      </Route>
      <Route path="/trip-tool">
        <TripTool />
      </Route>
    </Switch>
  );
};

export default MainContent;

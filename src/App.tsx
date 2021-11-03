import Layout from "./components/shared/Layout/Layout";
import MainContent from "./components/shared/MainContent/MainContent";
import { useDispatch } from "react-redux";
import { getPlacesToVisitArray } from "./services/places-to-visit-service";
import { setVisitSpots } from "./actions/visitSpots/actionCreators";
import { checkIfUserAdmin } from "./actions/authentificationActions/autActionCreators";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getVisitSpotsArray();
    dispatch(checkIfUserAdmin("admin"));
  }, []);

  const getVisitSpotsArray = async () => {
    const response = await getPlacesToVisitArray();
    const visitSpotData = response.data.places;
    dispatch(setVisitSpots(visitSpotData));
  };

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export default App;

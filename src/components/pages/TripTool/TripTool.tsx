import { useState, useEffect } from "react";
import Map from "../../shared/Map/Map";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import AddButton from "../../shared/AddCreateButton/AddButton";
import TripToolTable from "./TripToolTable/TripToolTable";
import TripToolCard from "./TripToolCard/TripToolCard";
import { getCountiesDataArray } from "../../../services/places-to-visit-service";
import { setCountiesArray } from "../../../actions/countiesActions/countiesActionsCreators";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";

import "./TripTool.css";

const TripTool = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isTripToolCardVisible, setIsTripToolCardVisible] = useState(false);
  const visitSpotsOfSelectedCountiesArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsOfCountiesArray
  );
  const selectedCountiesArrayState = useSelector(
    (state: RootState) => state.counties.selectedCountiesArray
  );

  const toggleButton = (count: number) => {
    if (count > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    setIsLoading(true);
    const response = await getCountiesDataArray();
    const countiesArray = response.data.counties;
    dispatch(setCountiesArray(countiesArray));
    setIsLoading(false);
  };

  const createTrip = () => {
    setIsTripToolCardVisible(true);
  };

  return (
    <>
      <div className="tripTool">
        <AddButton
          title="Create trip"
          onAddCreate={createTrip}
          disabled={isButtonDisabled}
        />
        {isTripToolCardVisible &&
          visitSpotsOfSelectedCountiesArrayState.length === 0 && (
            <p className="noSpotsMessage">
              Could not find any visit spots in selected counties
            </p>
          )}
      </div>
      {!isLoading ? (
        <div className="tableContainer">
          <TripToolTable
            onCountySelect={toggleButton}
            onCheckboxSelect={() => {
              setIsTripToolCardVisible(false);
            }}
          />
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <div>
        {isTripToolCardVisible &&
          visitSpotsOfSelectedCountiesArrayState.length !== 0 && (
            <TripToolCard
              data={visitSpotsOfSelectedCountiesArrayState}
              onClose={() => setIsTripToolCardVisible(false)}
            />
          )}
      </div>
      <Map countiesData={selectedCountiesArrayState} />
    </>
  );
};

export default TripTool;

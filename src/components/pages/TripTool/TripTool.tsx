import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TripToolTable from "./TripToolTable/TripToolTable";
import TripToolCard from "./TripToolCard/TripToolCard";
import { getCountiesDataArray } from "../../../services/places-to-visit-service";
import { setCountiesArray } from "../../../actions/countiesActions/countiesActionsCreators";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";

import "./TripTool.css";

const TripTool = () => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isTripToolCardVisible, setIsTripToolCardVisible] = useState(false);
  const visitSpotsOfSelectedCountiesArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsOfCountiesArray
  );

  const toggleButton = (count: number) => {
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    const response = await getCountiesDataArray();
    const countiesArray = response.data.counties;
    dispatch(setCountiesArray(countiesArray));
  };

  return (
    <>
      <div className="tripTool">
        <Button
          variant="contained"
          size="large"
          disabled={isButtonDisabled}
          onClick={() => setIsTripToolCardVisible(true)}
        >
          Create trip
        </Button>
        {isTripToolCardVisible &&
          visitSpotsOfSelectedCountiesArrayState.length === 0 && (
            <p className="noSpotsMessage">
              Could not find any visit spots in selected counties
            </p>
          )}
      </div>
      <div className="tableContainer">
        <TripToolTable
          onCountySelect={toggleButton}
          onCheckboxSelect={() => {
            setIsTripToolCardVisible(false);
          }}
        />
      </div>
      <div>
        {isTripToolCardVisible &&
          visitSpotsOfSelectedCountiesArrayState.length !== 0 && (
            <TripToolCard
              data={visitSpotsOfSelectedCountiesArrayState}
              onClose={() => setIsTripToolCardVisible(false)}
            />
          )}
      </div>
    </>
  );
};

export default TripTool;

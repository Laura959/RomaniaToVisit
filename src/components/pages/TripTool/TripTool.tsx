import { useState } from "react";
import { Button } from "@mui/material";
import TripToolTable from "./TripToolTable";
import TripToolCard from "./TripToolCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";

import "./TripTool.css";

const TripTool = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isTripToolCardVisible, setIsTripToolCardVisible] = useState(false);
  const visitSpotsOfSelectedCountiesArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsOfCountiesArray
  );
  console.log(visitSpotsOfSelectedCountiesArrayState);

  const toggleButton = (count: number) => {
    setIsButtonDisabled(false);
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
          onClick={toggleButton}
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
              onClick={() => setIsTripToolCardVisible(false)}
            />
          )}
      </div>
    </>
  );
};

export default TripTool;

import MarkerCardVisitSpot from "../MarkerCardVisitSpot/MarkerCardVisitSpot";
import { PlaceToVisitObject } from "../../../../models/dataModels";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducers/rootReducer";

import "./MapMarkerCard.css";

interface MapMarkerProps {
  county: string;
}

const MapMarkerCard: React.FC<MapMarkerProps> = (props) => {
  const { county } = props;
  const selectedVisitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );
  const visitSpotsInCounty = selectedVisitSpotsArrayState.filter(
    (visitSpot) => visitSpot.county === county
  );
  return (
    <>
      <div className="popupTitle">Visit Spots in {county}:</div>
      <div className="markerCardContainer">
        {visitSpotsInCounty.map((visitSpot: PlaceToVisitObject) => (
          <MarkerCardVisitSpot key={visitSpot.id} visitSpotdata={visitSpot} />
        ))}
      </div>
    </>
  );
};

export default MapMarkerCard;

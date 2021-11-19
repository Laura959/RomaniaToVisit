import ImageCardWithTitle from "../../ImageCardWithTitle/ImageCardWithTitle";
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
          <ImageCardWithTitle
            key={visitSpot.id}
            visitSpotData={visitSpot}
            cardHeight="90"
            className="mapCardContainer"
          />
        ))}
      </div>
    </>
  );
};

export default MapMarkerCard;

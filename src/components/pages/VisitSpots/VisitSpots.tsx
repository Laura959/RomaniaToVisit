import { useEffect, useState } from "react";
import { PlaceToVisitObject } from "../../../models/dataModels";
import VisitSpotsCard from "../../shared/ImageCardWithTitle/ImageCardWithTitle";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import AddButton from "../../shared/AddCreateButton/AddButton";
import { getPlacesToVisitArray } from "../../../services/places-to-visit-service";
import { setVisitSpots } from "../../..//actions/visitSpots/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import useModal from "../../../hooks/useModal";
import "./VisitSpots.css";
import { RootState } from "../../../reducers/rootReducer";

const VisitSpots = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { openModalHandler } = useModal();
  const dispatch = useDispatch();
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );
  const isUserAdmin = useSelector(
    (state: RootState) => state.authentification.isAdmin
  );

  useEffect(() => {
    getVisitSpotsArray();
  }, []);

  const getVisitSpotsArray = async () => {
    try {
      const response = await getPlacesToVisitArray();
      const visitSpotData = response.data.places;
      dispatch(setVisitSpots(visitSpotData));
    } catch (e) {}
    setIsLoading(false);
  };

  const renderVisitSpotssOrMessage = () => {
    if (visitSpotsArrayState.length !== 0) {
      return (
        <div className="visitSpotsCardsContainer">
          {visitSpotsArrayState.map((visitSpot: PlaceToVisitObject) => (
            <VisitSpotsCard
              test-id="test-card-id"
              key={visitSpot.id}
              visitSpotData={visitSpot}
              cardHeight="600"
              onCardClick={() => {
                openModalHandler("INFO", { visitSpot });
              }}
            />
          ))}
        </div>
      );
    }
    return <p>Could not retrieve Visit Spot data!</p>;
  };

  return (
    <div>
      <div className="buttonContainer">
        {isUserAdmin && (
          <AddButton
            title="Create New Visit Spot"
            onAddCreate={() => {
              openModalHandler("FORM");
            }}
          />
        )}
      </div>
      {!isLoading ? (
        renderVisitSpotssOrMessage()
      ) : (
        <LoadingSpinner test-id="test-spinner-id" />
      )}
    </div>
  );
};

export default VisitSpots;

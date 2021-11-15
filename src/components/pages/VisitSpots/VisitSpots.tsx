import { useEffect, useState } from "react";
import { PlaceToVisitObject } from "../../../models/dataModels";
import VisitSpotsCard from "../../shared/ImageCardWithTitle/ImageCardWithTitle";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import AddButton from "../../shared/AddCreateButton/AddButton";
import { getPlacesToVisitArray } from "../../../services/places-to-visit-service";
import { setVisitSpots } from "../../..//actions/visitSpots/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../../shared/Snackbar/Snackbar";
import { openModal } from "../../../actions/modalActions/modalActionCreators";
import "./VisitSpots.css";
import { RootState } from "../../../reducers/rootReducer";
import Modal from "../../shared/Modal/Modal";

const VisitSpots = () => {
  const [isLoading, setIsLoading] = useState(true);
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
    const response = await getPlacesToVisitArray();
    const visitSpotData = response.data.places;
    dispatch(setVisitSpots(visitSpotData));
    setIsLoading(false);
  };

  const renderVisitSpotssOrMessage = () => {
    if (visitSpotsArrayState.length !== 0) {
      return (
        <div className="visitSpotsCardsContainer">
          {visitSpotsArrayState.map((visitSpot: PlaceToVisitObject) => (
            <VisitSpotsCard
              key={visitSpot.id}
              visitSpotData={visitSpot}
              onCardClick={() => {
                dispatch(openModal({ modalType: "INFO", data: { visitSpot } }));
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
      <Snackbar text="Your visit spot was successfully created!" />
      <div className="buttonContainer">
        {isUserAdmin && (
          <AddButton
            title="Create New Visit Spot"
            onAddCreate={() => {
              dispatch(openModal({ modalType: "FORM" }));
            }}
          />
        )}
      </div>
      {!isLoading ? renderVisitSpotssOrMessage() : <LoadingSpinner />}
      <Modal />
    </div>
  );
};

export default VisitSpots;

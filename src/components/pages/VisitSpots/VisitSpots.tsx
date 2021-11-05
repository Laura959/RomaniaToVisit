import { useState, useEffect } from "react";
import { PlaceToVisitObject } from "../../../models/models";
import VisitSpotsCard from "./VisitSpotCard/VisitSpotCard";
import VisitSpotsDialog from "./VisitSpotsDialog/VisitSpotsDialog";
import VisitSpotForm from "./VisitSpotForm/VisitSpotForm";
import Backdrop from "../../shared/Backdrop/Backdrop";
import { Button, Grid } from "@mui/material";
import { getPlacesToVisitArray } from "../../../services/places-to-visit-service";
import { setVisitSpots } from "../../..//actions/visitSpots/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../../shared/Snackbar/Snackbar";
import "./VisitSpots.css";
import { RootState } from "../../../reducers/rootReducer";

const VisitSpots = () => {
  const [dialogData, setDialogData] = useState<PlaceToVisitObject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );

  useEffect(() => {
    getVisitSpotsArray();
  }, []);

  const getVisitSpotsArray = async () => {
    const response = await getPlacesToVisitArray();
    const visitSpotData = response.data.places;
    dispatch(setVisitSpots(visitSpotData));
  };

  const isUserAdmin = useSelector(
    (state: RootState) => state.authentification.isAdmin
  );

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVisitSpotDialog = (data: PlaceToVisitObject) => {
    setIsModalOpen(true);
    setDialogData(data);
  };

  return (
    <Grid
      container
      justifyContent="center"
      textAlign="center"
      direction="column"
      className="circularProgressDiv"
    >
      <Snackbar />
      <Grid container item justifyContent="left" className="buttonContainer">
        {isUserAdmin && (
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            Create New Visit Spot
          </Button>
        )}
      </Grid>
      {visitSpotsArrayState.length !== 0 ? (
        <Grid container item justifyContent="center" textAlign="center">
          {visitSpotsArrayState.map((visitSpot: PlaceToVisitObject) => (
            <VisitSpotsCard
              key={visitSpot.id}
              visitSpotData={visitSpot}
              onCardClick={openVisitSpotDialog}
            />
          ))}
        </Grid>
      ) : (
        <p>Could not retrieve Visit Spot data!</p>
      )}
      {isModalOpen && (
        <>
          <Backdrop onBackdropClick={closeModal} />
          <VisitSpotsDialog
            data={dialogData as PlaceToVisitObject}
            onClose={closeModal}
          />
        </>
      )}
      {isFormOpen && (
        <>
          <Backdrop
            onBackdropClick={() => {
              setIsFormOpen(false);
            }}
          />
          <VisitSpotForm
            onClose={() => {
              setIsFormOpen(false);
            }}
          />
        </>
      )}
    </Grid>
  );
};

export default VisitSpots;

import { useState } from "react";
import { PlaceToVisitObject } from "../../../models/models";
import VisitSpotsCard from "./VisitSpotCard";
import VisitSpotsDialog from "./VisitSpotsDialog";
import VisitSpotForm from "./VisitSpotForm";
import Backdrop from "../../shared/Backdrop/Backdrop";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "./VisitSpots.css";
import { RootState } from "../../../reducers/rootReducer";

const VisitSpots = () => {
  const [dialogData, setDialogData] = useState<PlaceToVisitObject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );
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
              onClick={openVisitSpotDialog}
            />
          ))}
        </Grid>
      ) : (
        <p>Could not retrieve Visit Spot data!</p>
      )}
      {isModalOpen && (
        <>
          <Backdrop onClick={closeModal} />
          <VisitSpotsDialog
            data={dialogData as PlaceToVisitObject}
            onClick={closeModal}
          />
        </>
      )}
      {isFormOpen && (
        <>
          <Backdrop
            onClick={() => {
              setIsFormOpen(false);
            }}
          />
          <VisitSpotForm
            onClick={() => {
              setIsFormOpen(false);
            }}
          />
        </>
      )}
    </Grid>
  );
};

export default VisitSpots;

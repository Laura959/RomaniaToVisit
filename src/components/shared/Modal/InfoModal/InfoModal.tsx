import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalPlaceToVisit } from "../../../../models/dataModels";
import { RootState } from "../../../../reducers/rootReducer";

import "./InfoModal.css";

interface DialogProps {
  onClose: () => void;
}

const VisitSpotsDialog: React.FC<DialogProps> = (props) => {
  const { onClose } = props;
  const dataState = useSelector(
    (state: RootState) => state.modals.modalData
  ) as ModalPlaceToVisit;
  const data = dataState.visitSpot;

  return (
    <Card className="dialogCard">
      <CardHeader
        action={
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
        title={data.name}
      />
      <CardMedia
        component="img"
        alt="romania visit spot"
        height="280"
        image={data.image}
      />
      <CardContent className="cardContent">
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="button">
          <Link className="buttonContent" to={`/counties/${data.countyId}`}>
            <div>
              Location: <span className="locationInfo">{data.location}</span>
            </div>
            <div>
              County: <span className="locationInfo">{data.county}</span>
            </div>
          </Link>
        </Button>
        <div className="nearTownContentDiv">
          <div className="nearTownInnerDiv">
            <div className="checkboxDiv">
              Near Town:
              {data.nearTown ? (
                <CheckBoxIcon color="success" />
              ) : (
                <DisabledByDefaultIcon color="warning" />
              )}
            </div>
            <div className="checkboxDiv">
              Mountain area:
              {data.mountainArea ? (
                <CheckBoxIcon color="success" />
              ) : (
                <DisabledByDefaultIcon color="warning" />
              )}
            </div>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default VisitSpotsDialog;

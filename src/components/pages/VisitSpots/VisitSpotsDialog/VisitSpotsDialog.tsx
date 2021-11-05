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
import { PlaceToVisitObject } from "../../../../models/models";

import "./VisitSpotsDialog.css";
import { Link } from "react-router-dom";

interface DialogProps {
  data: PlaceToVisitObject;
  onClose: () => void;
}

const VisitSpotsDialog: React.FC<DialogProps> = (props) => {
  const { data, onClose } = props;

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
        alt="green iguana"
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

import { PlaceToVisitObject } from "../../../../models/dataModels";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

import "./MarkerCardVisitSpot.css";

interface MarkerCardVisitSpotProps {
  visitSpotdata: PlaceToVisitObject;
}

const MarkerCardVisitSpot: React.FC<MarkerCardVisitSpotProps> = (props) => {
  const { visitSpotdata } = props;
  return (
    <Card className="MarkerCardVisitSpotContainer">
      <CardActionArea>
        <div className="overlay"></div>
        <div className="cardText">{visitSpotdata.name}</div>
        <CardMedia
          component="img"
          height="90"
          image={visitSpotdata.image}
          alt={visitSpotdata.name}
        />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MarkerCardVisitSpot;

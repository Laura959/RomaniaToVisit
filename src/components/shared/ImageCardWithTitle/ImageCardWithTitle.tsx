import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { PlaceToVisitObject } from "../../../models/dataModels";

import "./ImageCardWithTitle.css";

interface CardProps {
  visitSpotData: PlaceToVisitObject;
  onCardClick: (place: PlaceToVisitObject) => void;
}

const VisitSpotCard: React.FC<CardProps> = (props) => {
  const { visitSpotData, onCardClick } = props;

  return (
    <Card className="cardContainer">
      <CardActionArea onClick={() => onCardClick(visitSpotData)}>
        <div className="overlay"></div>
        <Typography color="primary" variant="h2">
          {visitSpotData.name}
        </Typography>
        <CardMedia
          component="img"
          height="600"
          image={visitSpotData.image}
          alt={visitSpotData.name}
          className="cardImage"
        />
      </CardActionArea>
    </Card>
  );
};

export default VisitSpotCard;

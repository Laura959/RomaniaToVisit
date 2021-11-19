import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { PlaceToVisitObject } from "../../../models/dataModels";

import "./ImageCardWithTitle.css";

interface CardProps {
  visitSpotData: PlaceToVisitObject;
  onCardClick?: (place: PlaceToVisitObject) => void;
  cardHeight: string;
  className?: string;
}

const VisitSpotCard: React.FC<CardProps> = (props) => {
  const { visitSpotData, onCardClick, cardHeight, className } = props;

  const cardClickHandler = () => {
    if (onCardClick) {
      onCardClick(visitSpotData);
    }
  };

  return (
    <Card className={`cardContainer ${className}`}>
      <CardActionArea onClick={cardClickHandler}>
        <div className="overlay"></div>
        <Typography color="primary" variant="h2">
          {visitSpotData.name}
        </Typography>
        <CardMedia
          component="img"
          height={cardHeight}
          image={visitSpotData.image}
          alt={visitSpotData.name}
          className="cardImage"
        />
      </CardActionArea>
    </Card>
  );
};

export default VisitSpotCard;

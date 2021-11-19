import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { TraditionData } from "../../../../models/dataModels";

import "./TraditionCard.css";

interface CardProps {
  traditionData: TraditionData;
}

const VisitSpotCard: React.FC<CardProps> = (props) => {
  const { traditionData } = props;

  return (
    <Card className="traditionDialogCard">
      <CardHeader title={traditionData.title} />
      <CardMedia
        component="img"
        alt="romania visit spot"
        height="280"
        image={traditionData.image}
      />
      <CardContent className="traditionCardContent">
        <Typography variant="body2" color="text.secondary">
          {traditionData.description}
        </Typography>
        <CardActions>
          <div className="traditionsContentDiv">
            <div className="traditionsContentMidDiv">
              <div className="traditionsContentInnerDiv">
                <span>Location:</span> {traditionData.location}
              </div>
              <div className="traditionsContentInnerDiv">
                <span>Date:</span>{" "}
                {traditionData.origin ? traditionData.origin : "Unknown"}
              </div>
            </div>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default VisitSpotCard;

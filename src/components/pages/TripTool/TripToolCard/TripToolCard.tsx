import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "@mui/material";
import { PlaceToVisitObject } from "../../../../models/dataModels";
import CloseIcon from "@mui/icons-material/Close";

import "./TripToolCard.css";

interface TripCardProps {
  data: PlaceToVisitObject[][];
  onTripToolCardClose: () => void;
}

const TripToolCard: React.FC<TripCardProps> = (props) => {
  const { data, onTripToolCardClose } = props;

  return (
    <Card className="tripToolCard">
      <CardContent>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={onTripToolCardClose}>
              <CloseIcon />
            </IconButton>
          }
          title="Your trip destinations"
        />
        {data.map((item) => (
          <>
            {item.map((arrayItem) => (
              <>
                <Divider />
                <p className="jsonText">{JSON.stringify(arrayItem)}</p>
              </>
            ))}
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default TripToolCard;

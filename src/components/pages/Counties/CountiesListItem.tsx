import { ListItem, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import "./CountiesListItem.css";
import { useState } from "react";

interface CountyProps {
  name: string;
  id: number;
}

const CountiesListItem: React.FC<CountyProps> = (props) => {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const { name } = props;

  return (
    <>
      <Link to={`/counties/${name}`} className="link">
        <ListItem
          onMouseEnter={() => setIsArrowVisible(true)}
          onMouseLeave={() => setIsArrowVisible(false)}
          className="listItem"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              {isArrowVisible && <ArrowForwardIcon className="icon" />}
            </IconButton>
          }
        >
          <div className="itemContent">{name}</div>
        </ListItem>
      </Link>
    </>
  );
};

export default CountiesListItem;

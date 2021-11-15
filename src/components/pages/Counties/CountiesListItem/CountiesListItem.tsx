import { ListItem, IconButton, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./CountiesListItem.css";

interface CountyProps {
  name: string;
  id: number;
}

const CountiesListItem: React.FC<CountyProps> = (props) => {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const { name, id } = props;

  return (
    <Link to={`/counties/${id}`} className="link">
      <ListItem
        onMouseEnter={() => setIsArrowVisible(true)}
        onMouseLeave={() => setIsArrowVisible(false)}
        className="listItem"
        secondaryAction={
          <div className="countyItemBtnDivider">
            <IconButton edge="end" aria-label="delete">
              {isArrowVisible && <ArrowForwardIcon className="icon" />}
            </IconButton>
          </div>
        }
      >
        <div className="countyItemDivider">
          <div className="itemContent">{name}</div>
        </div>
      </ListItem>
    </Link>
  );
};

export default CountiesListItem;

import counties from "../../../data/counties";
import { useState } from "react";
import List from "@mui/material/List";
import CountiesListItem from "./CountiesListItem";
import SearchBar from "../../shared/SearchBar/SearchBar";

import "./Counties.css";

const Counties = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchCounties = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div>
      <div className="listContainer">
        <div className="searchContainer">
          <SearchBar onClick={searchCounties} />
        </div>
        <List>
          {counties
            .filter((county) => county.includes(searchValue))
            .map((county, index) => (
              <CountiesListItem name={county} key={index} id={index} />
            ))}
        </List>
      </div>
    </div>
  );
};

export default Counties;

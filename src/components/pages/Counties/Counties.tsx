import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";
import { getCountiesDataArray } from "../../../services/places-to-visit-service";
import List from "@mui/material/List";
import { setCountiesArray } from "../../../actions/countiesActions/countiesActionsCreators";
import CountiesListItem from "./CountiesListItem/CountiesListItem";
import SearchBar from "../../shared/SearchBar/SearchBar";

import "./Counties.css";

const Counties = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const countiesArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    const response = await getCountiesDataArray();
    const countiesArray = response.data.counties;
    dispatch(setCountiesArray(countiesArray));
  };

  const searchCounties = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div className="listContainer">
        <div className="searchContainer">
          <SearchBar onSearchSubmit={searchCounties} />
        </div>
        <List>
          {countiesArrayState
            .filter((county) => county.county.includes(searchValue))
            .map((county, index) => (
              <CountiesListItem
                name={county.county}
                key={index}
                id={county.id}
              />
            ))}
        </List>
      </div>
    </div>
  );
};

export default Counties;

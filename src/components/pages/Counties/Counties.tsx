import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";
import { getCountiesDataArray } from "../../../services/places-to-visit-service";
import List from "@mui/material/List";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import { setCountiesArray } from "../../../actions/countiesActions/countiesActionsCreators";
import CountiesListItem from "./CountiesListItem/CountiesListItem";
import SearchBar from "../../shared/SearchBar/SearchBar";

import "./Counties.css";

const Counties = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const countiesArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );
  const searchedCounties = countiesArrayState.filter((county) =>
    county.county.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    setIsLoading(true);
    const response = await getCountiesDataArray();
    const countiesArray = response.data.counties;
    dispatch(setCountiesArray(countiesArray));
    setIsLoading(false);
  };

  const searchCounties = (value: string) => {
    setSearchValue(value);
  };

  const renderCountiesOrMessage = () => {
    if (searchedCounties.length !== 0) {
      return (
        <List>
          {searchedCounties.map((county, index) => (
            <CountiesListItem name={county.county} key={index} id={county.id} />
          ))}
        </List>
      );
    }
    return <p>No counties were found!</p>;
  };

  return (
    <div>
      <div className="searchContainer">
        <SearchBar onSearchSubmit={searchCounties} />
      </div>
      <div className="listContainer">
        {!isLoading ? renderCountiesOrMessage() : <LoadingSpinner />}
      </div>
    </div>
  );
};

export default Counties;

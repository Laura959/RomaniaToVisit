import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import "./SearchBar.css";
import { useState } from "react";

interface SearchBarProps {
  onClick: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { onClick } = props;

  const searchCounties = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClick(inputValue);
  };
  return (
    <Paper
      component="form"
      onSubmit={searchCounties}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: 2,
      }}
      className="searchBar"
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search County"
        inputProps={{ "aria-label": "search counties" }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

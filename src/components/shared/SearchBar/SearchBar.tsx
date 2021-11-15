import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import "./SearchBar.css";

interface SearchBarProps {
  onSearchSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onSearchSubmit } = props;

  const searchCounties = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Paper component="form" onSubmit={searchCounties} className="searchBar">
      <InputBase
        sx={{ ml: 1, flex: 1, height: "50px" }}
        placeholder="Search County"
        inputProps={{ "aria-label": "search counties" }}
        onChange={(e) => onSearchSubmit(e.target.value)}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

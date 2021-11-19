import { Paper } from "@mui/material";
import "./FormDropdown.css";

const FormDropdown = (props: any) => {
  return <Paper elevation={8} {...props} className="autocompleteDropdown" />;
};

export default FormDropdown;

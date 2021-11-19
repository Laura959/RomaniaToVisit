import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../reducers/rootReducer";
import { CountyData } from "../../../../../models/dataModels";
import FormDropdown from "../FormDropdown/FormDropdown";

import "./FormSelectInput.css";

interface SelectInputProps {
  onCountySelect: (county: CountyData) => void;
}

const FormSelectInput: React.FC<SelectInputProps> = (props) => {
  const { onCountySelect } = props;
  const countiesArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );
  const countiesListWithLabels = countiesArrayState.map(
    (countyItem: CountyData) => ({ label: countyItem.county, ...countyItem })
  );

  return (
    <>
      <Autocomplete
        disablePortal
        color="default"
        onChange={(event, value) => {
          value && onCountySelect(value);
        }}
        id="combo-box-demo"
        options={countiesListWithLabels}
        className="countySelect"
        PaperComponent={FormDropdown}
        renderInput={(params) => (
          <TextField {...params} color="info" required />
        )}
      />
    </>
  );
};

export default FormSelectInput;

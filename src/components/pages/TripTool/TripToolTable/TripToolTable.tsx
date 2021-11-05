import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { CountyData } from "../../../../models/models";
import { useSelector, useDispatch } from "react-redux";
import { setVisitSpotsOfSelectedCounties } from "../../../../actions/visitSpots/actionCreators";
import { RootState } from "../../../../reducers/rootReducer";

import "./TripToolTable.css";

const columns: GridColDef[] = [
  { field: "county", headerName: "County Name", width: 180 },
  { field: "population", headerName: "Population", type: "number", width: 180 },
  { field: "size", headerName: "Size (km2)", type: "number", width: 180 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "region", headerName: "Region", width: 130 },
];

interface TableProps {
  onCountySelect: (count: number) => void;
  onCheckboxSelect: () => void;
}

const TripToolTable: React.FC<TableProps> = (props) => {
  const { onCountySelect, onCheckboxSelect } = props;
  const dispatch = useDispatch();
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );
  const countiesDataArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );

  const getVisitSpotsFromSelectedCounties = (
    selectedCountiesArray: CountyData[]
  ) => {
    const visitSpotsOfSelectedCounties = selectedCountiesArray.map(
      (selectedCounty) =>
        visitSpotsArrayState.filter(
          (visitSpot) => selectedCounty.county === visitSpot.county
        )
    );
    const visitSpotsOfSelectedCountiesFiltered =
      visitSpotsOfSelectedCounties.filter(
        (visitSpotsArray) => visitSpotsArray.length
      );
    dispatch(
      setVisitSpotsOfSelectedCounties(visitSpotsOfSelectedCountiesFiltered)
    );
  };

  return (
    <>
      {countiesDataArrayState.length !== 0 ? (
        <div className="tripToolTable">
          <DataGrid
            rows={countiesDataArrayState}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = countiesDataArrayState.filter(
                (countyData) => selectedIDs.has(countyData.id)
              );
              getVisitSpotsFromSelectedCounties(selectedRowData);
              onCountySelect(selectedRowData.length);
              onCheckboxSelect();
            }}
          />
        </div>
      ) : (
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Counties data was not received!
        </Typography>
      )}
    </>
  );
};

export default TripToolTable;

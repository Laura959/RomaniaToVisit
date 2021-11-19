import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { CountyData } from "../../../../models/dataModels";
import { useSelector, useDispatch } from "react-redux";
import { setVisitSpotsOfSelectedCounties } from "../../../../actions/visitSpots/actionCreators";
import {
  setSelectedCountiesArray,
  setCountiesWithVisitSpotsArray,
} from "../../../../actions/countiesActions/countiesActionsCreators";
import { setShowHideMap } from "../../../../actions/mapActions/mapActionsCreators";
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

  const countiesWithVisitSpots = useSelector(
    (state: RootState) => state.counties.countiesWithVisitSpotsArray
  );

  const countiesAndVisitSpots = {
    counties: countiesDataArrayState,
    visitSpots: visitSpotsArrayState,
  };

  useEffect(() => {
    dispatch(setCountiesWithVisitSpotsArray(countiesAndVisitSpots));
  }, []);

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
      {countiesWithVisitSpots.length !== 0 ? (
        <div className="tripToolTable">
          <DataGrid
            rows={countiesWithVisitSpots}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = countiesWithVisitSpots.filter(
                (countyData) => selectedIDs.has(countyData.id)
              );
              console.log(selectedRowData);
              getVisitSpotsFromSelectedCounties(selectedRowData);
              dispatch(setSelectedCountiesArray(selectedRowData));
              onCountySelect(selectedRowData.length);
              dispatch(setShowHideMap(false));
              onCheckboxSelect();
            }}
          />
        </div>
      ) : (
        <Typography className="tableErrorMessage" variant="h5">
          Counties data was not received!
        </Typography>
      )}
    </>
  );
};

export default TripToolTable;

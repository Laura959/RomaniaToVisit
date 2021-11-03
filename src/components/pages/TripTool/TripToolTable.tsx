import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CircularProgress, Typography } from "@mui/material";
import { getCountiesDataArray } from "../../../services/places-to-visit-service";
import { useEffect, useState } from "react";
import { CountyData } from "../../../models/models";
import { useSelector, useDispatch } from "react-redux";
import { setVisitSpotsOfSelectedCounties } from "../../../actions/visitSpots/actionCreators";
import { RootState } from "../../../reducers/rootReducer";

import "./TripToolTable.css";

const columns: GridColDef[] = [
  { field: "county", headerName: "County Name", width: 180 },
  { field: "population", headerName: "Population", type: "number", width: 180 },
  { field: "size", headerName: "Size (km2)", type: "number", width: 180 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "region", headerName: "Region", width: 130 },
];

interface TableProps {
  onClick: (count: number) => void;
  onCheckboxSelect: () => void;
}

const TripToolTable: React.FC<TableProps> = (props) => {
  const { onClick, onCheckboxSelect } = props;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [countiesData, setCountiesData] = useState<CountyData[] | []>([]);
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );

  useEffect(() => {
    getCountiesArray();
  }, []);

  const getCountiesArray = async () => {
    setIsLoading(true);
    setFetchError("");
    try {
      const response = await getCountiesDataArray();
      setCountiesData(response.data.counties);
    } catch (error) {
      setFetchError("Counties Array was not received!");
    }
    setIsLoading(false);
  };

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

  const rows = countiesData;
  console.log(rows);

  const renderTableOrErrorMessage = () => {
    if (countiesData.length !== 0) {
      return (
        <div className="tripToolTable">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = rows.filter((row) =>
                selectedIDs.has(row.id)
              );
              getVisitSpotsFromSelectedCounties(selectedRowData);
              onClick(selectedRowData.length);
              onCheckboxSelect();
            }}
          />
        </div>
      );
    }
    return (
      <Typography sx={{ textAlign: "center" }} variant="h5">
        {fetchError}
      </Typography>
    );
  };

  return (
    <>
      {!isLoading ? (
        renderTableOrErrorMessage()
      ) : (
        <div className="loadingSpinner">
          <CircularProgress size={60} color="warning" />
        </div>
      )}
    </>
  );
};

export default TripToolTable;

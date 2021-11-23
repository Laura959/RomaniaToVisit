import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { setShowHideRoutes } from "../../../actions/mapActions/mapActionsCreators";
import { RootState } from "../../../reducers/rootReducer";
import { CountyData } from "../../../models/dataModels";
import AddButton from "../AddCreateButton/AddButton";
import MapMarkerCard from "./MapMarkerCard/MapMarkerCard";
import Routing from "./Routing/Routing";
import { polygonCoordinates } from "../../../data/polygonCoordinates";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "./Map.css";

interface MapProps {
  countiesData: CountyData[];
}

const Map: React.FC<MapProps> = (props) => {
  const dispatch = useDispatch();
  const { countiesData } = props;
  const showRoutesState = useSelector(
    (state: RootState) => state.map.showRoutes
  );

  const rearrangedCoordinates = polygonCoordinates[1].map(
    (coordinates: any) => [coordinates[1], coordinates[0]]
  );
  const romaniaMapView = [
    [
      [-90, -360],
      [90, -360],
      [90, 360],
      [-90, 360],
    ],
    [...rearrangedCoordinates],
  ];

  const showRoutesHandler = () => {
    if (showRoutesState) {
      dispatch(setShowHideRoutes(false));
    } else {
      dispatch(setShowHideRoutes(true));
    }
  };
  return (
    <MapContainer
      center={[47.163574, 27.58255]}
      zoom={5}
      scrollWheelZoom={true}
      minZoom={4}
      className="leaflet-container"
    >
      <AddButton
        title={!showRoutesState ? "Show Routes" : "Hide Routes"}
        onAddCreate={showRoutesHandler}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon positions={romaniaMapView} />
      {showRoutesState ? (
        <Routing waypoints={countiesData} />
      ) : (
        <>
          <Marker position={[47.163574, 27.58255]}>
            <Popup>
              <MapMarkerCard county="Iași" />
            </Popup>
          </Marker>
          {countiesData.map((county) => (
            <Marker
              key={county.id}
              position={[county.coordinates[0], county.coordinates[1]]}
            >
              <Popup>
                <MapMarkerCard county={county.county} />
              </Popup>
            </Marker>
          ))}
        </>
      )}
    </MapContainer>
  );
};

export default Map;

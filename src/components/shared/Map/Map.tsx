import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CountyData } from "../../../models/dataModels";
import MapMarkerCard from "./MapMarkerCard/MapMarkerCard";

import "./Map.css";

interface MapProps {
  countiesData: CountyData[];
}

const Map: React.FC<MapProps> = (props) => {
  const { countiesData } = props;
  return (
    <MapContainer
      center={[47.163574, 27.58255]}
      zoom={13}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[47.163574, 27.58255]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {countiesData.map((county) => (
        <Marker
          key={county.id}
          position={[county.location[0], county.location[1]]}
        >
          <Popup>
            <MapMarkerCard county={county.county} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

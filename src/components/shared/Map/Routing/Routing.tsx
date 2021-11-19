import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props: any) => {
  const { waypoints } = props;

  const newWaypoints = waypoints.map((waypoint: any) =>
    L.latLng(waypoint.coordinates)
  );
  const newWaypointArray = [[47.158455, 27.601442], ...newWaypoints];

  const instance = L.Routing.control({
    waypoints: newWaypointArray,
    routeWhileDragging: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

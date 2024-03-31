import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icons from "../../assets/MapIcons";
import { tags } from "../../assets/variables";
function ResetCenterView(props) {
  const MapCenter = props.mapCenter;
  const map = useMap();

  useEffect(() => {
    if (MapCenter) {
      map.flyTo(L.latLng(MapCenter), map.getZoom(), {
        animate: true,
      });
    }
  });
  return null;
}

export default function AdminMap(props) {
  const { MapCenter, setMapCenter } = props.mapProps;
  const data = props.markerData;
  console.log(data);
  var markers = [];
  var tag_number = 0;

  data.tags_coord.forEach((item) => {
    // console.log([data.department_id]+ " "+[data.tags[tag_number]-1])
    markers.push(
      <Marker
        position={item}
        icon={icons[data.department_id - 1][data.tags[tag_number] - 1]}
      >
        <Popup>{data.tags_label[tag_number]}</Popup>
      </Marker>
    );
    tag_number = tag_number + 1;
  });

  return (
    <MapContainer
      center={MapCenter}
      zoom={12}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DLq69hXJiw2uSGwxZWRf"
      />

      {markers}

      <ResetCenterView mapCenter={MapCenter} />
    </MapContainer>
  );
}

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icons from "../../assets/MapIcons";
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

export default function ModalMap(props) {
  const markerData = props.markerData;
    console.log(markerData)
  

  return (
    <MapContainer
      center={[markerData.lat,markerData.long]}
      zoom={12}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        marginBottom: "30px",
        marginTop: "10px"
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DLq69hXJiw2uSGwxZWRf"
      />

<Marker
        position={[markerData.lat,markerData.long]}
        icon={icons[markerData.department-1][markerData.tag-1]}
      >
        {/* <Popup>{data.tags_label[tag_number]}</Popup> */}
      </Marker>

      <ResetCenterView mapCenter={[markerData.lat,markerData.long]} />
    </MapContainer>
  );
}

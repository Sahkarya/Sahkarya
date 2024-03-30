import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

  export default function AdminMap(props) {
    var {data} = props;
    console.log(data)
  

  return (
    <MapContainer
      center={[28.7041,77.1025]}
      zoom={12}
      style={{ width: "100%", height: "100%" }}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DLq69hXJiw2uSGwxZWRf"/>

    {data.tags_coord.map((coords) =>{
                <Marker position={coords} icon={icon}>
        <Popup>
          Location 
        </Popup>
      </Marker>
    })}
    
    </MapContainer>
  );
}

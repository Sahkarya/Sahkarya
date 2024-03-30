import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icons from "../assets/MapIcons";


  export default function AdminMap(props) {
    var {data} = props;
    console.log(data)
  var markers = [];
  var tag_number =  0
  data.tags_coord.forEach((item)=>{
    
    markers.push(<Marker position={item} icon={icons[data.department_id - 1][data.tags[tag_number]-1]} >
      <Popup>
      Location 
      </Popup>
      </Marker>);
  tag_number = tag_number+1;
  }) 
//   indents.push(<span className='indent' key={i}></span>);
// } 

  return (
    <MapContainer
      center={[28.7041,77.1025]}
      zoom={12}
      style={{ width: "100%", height: "100%" }}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DLq69hXJiw2uSGwxZWRf"/>

    {markers}
    
    </MapContainer>
  );
}

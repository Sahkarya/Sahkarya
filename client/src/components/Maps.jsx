import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Locate from "leaflet.locatecontrol";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { currLoc } from "../pages/Concern";
const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

let locate = false;
let tempSelectPosition = null;
function ResetCenterView(props) {


  const { locationSelection, setLocationSelection } = props;
  const map = useMap();
  
  useEffect(() => {
    map.addEventListener('mousemove', ()=>{
      var coord = map.getCenter();
      
      setLocationSelection([coord.lat,coord.lng]);
      
    });
    const locateOptions = {
      position: 'topright',
      // callback before engine starts retrieving locations
    }
    
    if(!locate){

      const lc = new Locate(locateOptions);
      lc.addTo(map);
      locate = true;
    }
    if (locationSelection) {

      map.setView(
        L.latLng(locationSelection),
        map.getZoom(),
        {
          animate: true
        }
        )
        
      }
    }, [locationSelection]);
    
    return null;
  }
  
  export default function Maps(props) {
  // const [locationSelection, setLocationSelection] = useState([28.6139,77.2090]); //coords - null value error
  const { locationSelection, setLocationSelection, selectPosition} = props.mapState;
  useEffect(()=>{
    if(selectPosition != tempSelectPosition){
      setLocationSelection([selectPosition?.lat, selectPosition?.lon]);
      tempSelectPosition = selectPosition;
    }
  })
  

  return (
    <MapContainer
      center={locationSelection}
      zoom={12}
      style={{ width: "425px", height: "250px" }}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DLq69hXJiw2uSGwxZWRf"/>

      
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            Location 
          </Popup>
        </Marker>
         
      <ResetCenterView locationSelection={locationSelection} setLocationSelection={setLocationSelection}/>

    </MapContainer>
  );
}

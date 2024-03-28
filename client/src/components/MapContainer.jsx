import { useState } from "react";
import '../pages/concern.css';
import Maps from "./Maps";
import {SearchBox} from "./SearchBox";

const MapContainer = (prop)=>{
    const [selectPosition, setSelectPosition] = useState(null);
    const [locationSelection, setLocationSelection] = useState([28.6139,77.2090]);
    const {formData, setFormData} = prop;
    const mapState = {locationSelection, setLocationSelection,selectPosition};
    const sharedState = {selectPosition, setSelectPosition, formData, setFormData,locationSelection, setLocationSelection}
    return(
        <>
        <div className="map-label" style={{ color: "#ffc107", marginTop: "0px", marginBottom: "5px", display: "inline-flex", alignItems: "center", padding: "7px 10px", borderRadius: "50px", cursor: "pointer", transition: "background 0.2s ease" }}>
                <i className="ri-map-pin-fill"></i>
                <span className="map-label-content" style={{ fontSize: "18px", fontWeight: "600", marginLeft: "7px" }}>Enter the Location</span>
              </div>
        <div style={{ width: "100%" }}>
            
        <SearchBox sharedState={sharedState} />
      </div>
        <div >
            
            <div style={{display: 'flex',
            position: "relative",
            zIndex: '1',
            left: '0',
            top: '0',
            width: '100%',
            height: '255px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            border: '2px solid #808080',
            borderRadius: '5px',
            alignItems: 'center'}}>
            <div style={{ width: "50vw", height: "100%" }}>
        <Maps mapState={mapState}/>
      </div>
      
    </div>
            
            
        </div>
        </>
    );
};

export default MapContainer;
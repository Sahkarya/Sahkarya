import Map from "./Map";
const MapContainer = ()=>{
    
    return(
        <div >
            <div className="map-label" style={{ color: "#ffc107", marginTop: "0px", marginBottom: "5px", display: "inline-flex", alignItems: "center", padding: "7px 10px", borderRadius: "50px", cursor: "pointer", transition: "background 0.2s ease" }}>
                <i className="ri-map-pin-fill"></i>
                <span className="map-label-content" style={{ fontSize: "18px", fontWeight: "600", marginLeft: "7px" }}>Enter the Location</span>
              </div>
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
            alignItems: 'center'}}><Map /></div>
            
            
        </div>
    );
};

export default MapContainer;
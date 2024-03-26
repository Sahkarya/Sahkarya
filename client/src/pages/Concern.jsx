import React, { useRef, useState } from "react";
import './concern.css'; // Assuming a separate CSS file
import MapContainer from '../components/MapContainer'

const Concern = () => {
  const [formData, setFormData] = useState({
    message: "",
    address: "",
    department: "",
  });
  const[mapToggle, setMapToggle] = useState(false);
  const [charCount, setCharCount] = useState(500);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png']; // Add allowed extensions
      const isValid = allowedExtensions.includes(file.name.split('.').pop().toLowerCase());
      if (!isValid) {
        console.warn("Invalid file type. Please select a JPG, JPEG, or PNG file.");
        return;
      }
      if (file.size > 1024 * 1024 * 5) { // 5MB limit (adjust as needed)
        console.warn("File size exceeds limit (5MB). Please select a smaller file.");
        return;
      }
      console.log(file);
      setImage("");
    } else {
      console.warn("No file selected");
    }
  };

  const handleChange = (e) => {
    const newMessage = e.target.value;
    setFormData({ ...formData, message: newMessage });
    setCharCount(500 - newMessage.length);
  };

  // Consider using a state variable or useRef for focused state management
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here (e.g., send data to server)
  };

  // const searchMap = ()=>{
  //   console.log("map")
  //   var optional_config = {
  //     location: [28.61, 77.23],
  //     region: "IND",
  //     height: 300,
  //   };
  //   const mapplsClassObject = new mappls();
  //   const mapplsPluginObject = new mappls_plugin();
    
  //   var search = mapplsPluginObject.search("agra",optional_config,(data) => {
  //     console.log(data); /* get search data in console */
  //   });
  //   console.log(search)
  // }
  
  
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div id="body" className="body-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh"}}> {/* Added a class for styling */}
        <div className="wrapper" style={{ background: "#fff", maxWidth: "475px", width: "100%", borderRadius: "15px", padding: "25px 25px 15px 25px", boxShadow: "0px 10px 15px 10px rgba(0,0,0,0.1)" }}>
              <div className="privacy" style={{ color: "#ffc107", margin: "15px 0", display: "inline-flex", alignItems: "center", padding: "7px 10px", borderRadius: "50px", cursor: "pointer", transition: "background 0.2s ease" }}>
                <i className="ri-chat-new-fill"></i>
                <span className="problem" style={{ fontSize: "18px", fontWeight: "600", marginLeft: "7px" }}>Share your Concern</span>
              </div>
          <div className="input-box" style={{ position: "relative", minHeight: "130px", maxHeight: "170px", overflowY: "auto" }}>
            <div className="tweet-area" style={{ position: "absolute", marginTop: "-3px", fontSize: "22px", color: "#98a5b1" }}>
              {/* {isFocused ? null : (
                <span className="placeholder">What's on your mind?</span>
              )} */}
              <textarea
                type="text" // Changed to a standard input type
                className={`input editable ${isFocused ? 'focused' : ''}`}
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="What's on your mind"
                maxLength={500} // Added maxLength for character limit
                style={{ height: "120px", width: "420px", marginTop: "5px", background: "rgb(247 247 246)", borderRadius: "10px", paddingLeft: "6px", outline: "none", fontSize: "17px", minHeight: "inherit", wordWrap: "break-word", wordBreak: "break-all", position: "relative", zIndex: "5" }}
              />
            </div>
          </div>
          <div className="Map-container">

            { mapToggle && <MapContainer/>} 

          </div>
          
          <div className="bottom">
            <ul className="icons">
              <li>
                <i className="ri-image-fill" onClick={handleImageClick}></i>
                <input type="file" ref={inputRef} onClick={handleImageChange} style={{ display: "none" }} />
              </li>
              <li>
                <i className="ri-community-fill" ></i>
              </li>
              <li>
                <i  className="ri-map-pin-fill" onClick={()=>setMapToggle(!mapToggle)}></i>
               </li>
            </ul>
            <div className="content">
              <span className="counter">{charCount}</span>
              <button disabled={charCount === 500} value={formData.handleSubmit} onClick={(handleSubmit)}>
                Post
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <footer className="footer" style={{ position:"inherit",bottom:"0", width:"100%"}}>
        <p style={{ color: "white" }}>&copy; 2024 Sahkarya. All rights reserved.</p>
        <div id='icon' style={{color:"white"}}>
          <i class="ri-instagram-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-twitter-x-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-code-box-fill" style={{marginRight:"20px"}}></i>
        </div>
      </footer>
    </>
  );
};


export default Concern;


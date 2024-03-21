import React, { useRef, useState } from "react";
import "./concern.css"; // Assuming a separate CSS file

const Concern = () => {
  const [formData, setFormData] = useState({
    message: "",
    address: "",
    department: "",
  });
  const [charCount, setCharCount] = useState(500);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const allowedExtensions = ["jpg", "jpeg", "png"]; // Add allowed extensions
      const isValid = allowedExtensions.includes(
        file.name.split(".").pop().toLowerCase()
      );
      if (!isValid) {
        console.warn(
          "Invalid file type. Please select a JPG, JPEG, or PNG file."
        );
        return;
      }
      if (file.size > 1024 * 1024 * 5) {
        // 5MB limit (adjust as needed)
        console.warn(
          "File size exceeds limit (5MB). Please select a smaller file."
        );
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

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div
        id="body"
        className="body-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "rgb(216 220 223)",
        }}
      >
        {" "}
        {/* Added a class for styling */}
        <div
          className="wrapper"
          style={{
            background: "#fff",
            maxWidth: "475px",
            width: "100%",
            borderRadius: "15px",
            padding: "25px 25px 15px 25px",
            boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="input-box"
            style={{
              position: "relative",
              minHeight: "130px",
              maxHeight: "170px",
              overflowY: "auto",
            }}
          >
            <div
              className="tweet-area"
              style={{
                position: "absolute",
                marginTop: "-3px",
                fontSize: "22px",
                color: "#98a5b1",
              }}
            >
              {/* {isFocused ? null : (
                <span className="placeholder">What's on your mind?</span>
              )} */}
              <textarea
                type="text" // Changed to a standard input type
                className={`input editable ${isFocused ? "focused" : ""}`}
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="What's on your mind"
                maxLength={500} // Added maxLength for character limit
                style={{
                  height: "120px",
                  width: "420px",
                  marginTop: "5px",
                  background: "rgb(247 247 246)",
                  borderRadius: "10px",
                  paddingLeft: "6px",
                  outline: "none",
                  fontSize: "17px",
                  minHeight: "inherit",
                  wordWrap: "break-word",
                  wordBreak: "break-all",
                  position: "relative",
                  zIndex: "5",
                }}
              />
            </div>
          </div>
          <div
            className="privacy"
            style={{
              color: "#ffc107",
              margin: "15px 0",
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            <i className="ri-chat-new-fill"></i>
            <span
              className="problem"
              style={{ fontSize: "18px", fontWeight: "600", marginLeft: "7px" }}
            >
              Everyone can share your problem
            </span>
          </div>
          <div className="bottom">
            <ul className="icons">
              <li>
                <i className="ri-image-fill" onClick={handleImageClick}></i>
                <input
                  type="file"
                  ref={inputRef}
                  onClick={handleImageChange}
                  style={{ display: "none" }}
                />
              </li>
              <li>
                <i className="ri-community-fill"></i>
              </li>
              <li>
                <i className="ri-map-pin-fill"></i>
              </li>
              {/* <li > {/* Disable click if there's an error 
                <i className="ri-map-pin-fill" onClick={locationError ? null : getLocation}></i>
                {formData.address && !locationError ? (
                  <span className="address-tooltip">{formData.address}</span>
                ) : (
                  <span className="address-tooltip">
                    {locationError ? locationError : "Click to access location"}
                  </span>
                )}
              </li> */}
            </ul>
            <div className="content">
              <span className="counter">{charCount}</span>
              <button
                disabled={charCount === 500}
                value={formData.handleSubmit}
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concern;

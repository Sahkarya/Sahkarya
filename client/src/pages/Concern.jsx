import React, { useRef, useState, useEffect } from "react";
import "./concern.css";
import { useAuth } from "../store/auth";

const Concern = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    address: "",
    department: "",
    image: "",
  });

  const { isLoggedIn } = useAuth();

  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setErrorMessage(error.message);
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (user && userData && coords.latitude != null) {
    console.log(coords);
    setFormData({
      email: user.email,
      address: coords.latitude + " " + coords.longitude,
      department: "",
      image: "",
    });
    setUserData(false);
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Backend logic
    try {
      const response = await fetch("http://localhost:5000/api/form/concern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Concern sent successfully");
        alert("Seccessfull ");
        setFormData({
          email: user.email,
          message: "",
          address: "",
          department: "",
          image: "",
        });
        setCharCount(500);
      }
    } catch (error) {
      console.log("Error while sending the message", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3.2rem" }}>
              You need to login to share your concern!
            </p>
            <a href="/login">
              <button
                type="submit"
                style={{
                  fontWeight: "500",
                  height: "40px",
                  width: "245px",
                  marginTop: "30px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#ffc107",
                  paddingTop: "5px",
                }}
              >
                Login Here
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }

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
              Share you concern
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

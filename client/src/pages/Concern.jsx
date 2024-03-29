import React, { useRef, useState, useEffect} from "react";
import "./concern.css";
import { useAuth } from "../store/auth";
import MapContainer from "../components/MapContainer";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { departments, tags } from "../assets/variables";
var currLoc;
const Concern = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    address: "",
    department: "",
    tag: "",
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

  const [mapToggle, setMapToggle] = useState(false);
  const [charCount, setCharCount] = useState(500);

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = async (event) => {
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
      const base64 = await convertToBase64(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: base64,
      }));
      console.log(formData);
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
      const response = await fetch("http://localhost:80/api/form/concern", {
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
        className="body-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#fff",
        }}
      >
        {" "}
        {/* Added a class for styling */}
        <div
          className="wrapper"
          style={{
            background: "#ddddde5c",
            maxheight: "900px",
            maxWidth: "700px",
            width: "100%",
            borderRadius: "15px",
            padding: "25px 25px 15px 25px",
            boxShadow: "0px 10px 15px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="privacy"
            style={{
              color: "#ffc107",
              margin: "8px 0",
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "50px",
              transition: "background 0.2s ease",
            }}
          >
            <i className="ri-chat-new-fill" style={{ fontSize: "25px" }}></i>
            <span
              className="problem"
              style={{ fontSize: "25px", fontWeight: "600", marginLeft: "7px" }}
            >
              Share you Concern
            </span>
          </div>
          <div
            className="input-box"
            style={{
              position: "relative",
              minHeight: "220px",
              maxHeight: "250px",
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
              <textarea
                type="text" // Changed to a standard input type
                className={`input editable ${isFocused ? "focused" : ""}`}
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind"
                maxLength={500} // Added maxLength for character limit
                style={{
                  height: "200px",
                  width: "650px",
                  marginTop: "5px",
                  background: "#fff",
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

          <div>
            <div
              className="department-label"
              style={{
                color: "#ffc107",
                marginTop: "0px",
                marginBottom: "5px",
                display: "inline-flex",
                alignItems: "center",
                padding: "7px 10px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <i className="ri-community-fill"></i>
              <span
                className="department-label-content"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginLeft: "7px",
                }}
              >
                Choose the department
              </span>
            </div>
            <Autocomplete
              disablePortal
              limitTags={1}
              id="departments"
              options={departments}
              onChange={(e, value) => setFormData({ ...formData, department: value })}
              sx={{ width: 400 }}
              renderTags={(options) => {
                return options.map((option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  >
                    <img
                      src={option.logo}
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    />
                    {option.description}
                  </Box>
                ));
              }}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    src={`./departments/${option.id}.png`}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "10px",
                    }}
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Select department"
                />
              )}
            />
          </div>
          <div>
            <div
              className="tag-label"
              style={{
                color: "#ffc107",
                marginTop: "0px",
                marginBottom: "5px",
                display: "inline-flex",
                alignItems: "center",
                padding: "7px 10px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <i className="ri-community-fill"></i>
              <span
                className="tag-label-content"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginLeft: "7px",
                }}
              >
                Add tags
              </span>
            </div>
            <Autocomplete
              disablePortal
              limitTags={1}
              id="tag"
              options={tags}
              sx={{ width: 200 }}
              onChange={(e, value) => setFormData({ ...formData, tag: value })}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Choose Tags" />
              )}
            />
          </div>
          <div className="Map-container">
            {mapToggle && (
              <MapContainer formData={formData} setFormData={setFormData} />
            )}
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
                <i
                  className="ri-map-pin-fill"
                  onClick={() => setMapToggle(!mapToggle)}
                ></i>
              </li>
            </ul>
            <div className="content">
              <span className="counter">{charCount}</span>
              <button
                disabled={charCount === 500}
                value={formData.handleSubmit}
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
export { Concern, currLoc };

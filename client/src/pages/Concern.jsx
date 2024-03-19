import React, {useRef, useState } from "react";
import './concern.css';
const Concern = () => {
  const [inputText, setInputText] = useState(' ');
  const [charCount, setCharCount] = useState(500);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    message: "",
    address: "",
    department: "",
  });

  const handleImageClick = () =>{
    inputRef.current.click();
  }
  const handleImageChange = (event) =>{
    const file = event.target.file[0];
    console.log(file);
    setImage("");
  }

  const handleChange = (e) => {
    const text = e.target.innerText;
    setInputText("");
    setCharCount(500 - text.length);
  };

  const handleFocus = () => {
    document.querySelector('').style.color = '#c5ccd3';
  };

  const handleBlur = () => {
    document.querySelector('').style.color = '#98a5b1';
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div id="body" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "rgb(216 220 223)" }}>
        <div className="wrapper" style={{ background: "#fff", maxWidth: "475px", width: "100%", borderRadius: "15px", padding: "25px 25px 15px 25px", boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" }}>
          <div className="input-box" style={{ paddingTop: "10px", borderBottom: "1px solid #e6e6e6" }}>
            <div className="tweet-area" style={{ position: "relative", minHeight: "130px", maxHeight: "170px", overflowY: "auto" }}>
              <span className="placeholder" style={{ position: "absolute", marginTop: "-3px", fontSize: "22px", color: "#98a5b1" }}></span>
              <div
                className="input editable"
                contentEditable="true"
                spellCheck="false"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyUp={handleChange}
                onKeyPress={handleChange}
                value={formData.message}
                style={{background:"rgb(247 247 246)", borderRadius:"10px", paddingLeft:"6px", outline: "none", fontSize: "17px", minHeight: "inherit", wordWrap: "break-word", wordBreak: "break-all", position: "relative", zIndex: "5" }}
              >
                {inputText}
              </div>
              <div className="input readonly" style={{ position: "absolute", top: "0", left: "0", zIndex: "-1", color: "transparent", background: "transparent" }}>{inputText}</div>
            </div>
            <div className="privacy" style={{ color: "#ffc107", margin: "15px 0", display: "inline-flex", alignItems: "center", padding: "7px 10px", borderRadius: "50px", cursor: "pointer", transition: "background 0.2s ease" }}>
              <i className="ri-chat-new-fill" style={{ fontSize: "18px" }}></i>
              <span className='problem' style={{ fontSize: "18px", fontWeight: "600", marginLeft: "7px" }}>Everyone can share your problem</span>
            </div>
          </div>
          <div className="bottom">
            <ul className="icons">
              <li onClick={handleImageClick}>

                <i class="ri-image-fill" value={formData.address}></i>
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>

              </li>
              <li>
                <i class="ri-community-fill" value={formData.department}></i>
              </li>
              <li>
                <i class="ri-map-pin-fill" value={formData.address}></i>
              </li>
            </ul>
            <div className="content">
              <span className="counter">{charCount}</span>
              <button disabled={charCount === 500} value={formData.handleSubmit}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concern;


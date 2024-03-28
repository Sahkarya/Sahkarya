import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer"
        style={{ position: "inherit", bottom: "0", width: "100%" }}
      >
        <p style={{ color: "white" }}>
          &copy; 2024 Sahkarya. All rights reserved.
        </p>
        <div id="icon" style={{ color: "white" }}>
          <i class="ri-instagram-fill" style={{ marginRight: "20px" }}></i>
          <i class="ri-twitter-x-fill" style={{ marginRight: "20px" }}></i>
          <i class="ri-code-box-fill" style={{ marginRight: "20px" }}></i>
        </div>
      </footer>
    </>
  );
};

export default Footer;

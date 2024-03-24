import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    identity: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
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
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
    < div style={{height:"100%"}}>
      <h2
        style={{
          color: "rgb(0, 36, 71)",
          width: "100%",
          display: "grid",
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
        }}
      >
        Registration Form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          paddingLeft: "20px",
        }}
      >
        <label
          htmlFor="name"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name."
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            marginTop: "10px",
            paddingLeft: "5px",
            boxSizing: "border-box",
            height: "40px",
            width: "430px",
            border: "1px solid #E6E6E6",
            borderRadius: "10px",
            color: "#333333",
            fontSize: "18px",
          }}
        />
        <label
          htmlFor="name"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Identity:
        </label>
        <input
          type="integer"
          id="identity"
          name="identity"
          placeholder="Enter your Id number."
          value={formData.identity}
          onChange={handleChange}
          required
          style={{
            marginTop: "10px",
            paddingLeft: "5px",
            boxSizing: "border-box",
            height: "40px",
            width: "430px",
            border: "1px solid #E6E6E6",
            borderRadius: "10px",
            color: "#333333",
            fontSize: "18px",
          }}
        />
        <label
          htmlFor="phone"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your mobile number."
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            marginTop: "10px",
            paddingLeft: "5px",
            boxSizing: "border-box",
            height: "40px",
            width: "430px",
            border: "1px solid #E6E6E6",
            borderRadius: "10px",
            color: "#333333",
            fontSize: "18px",
          }}
        />

        <label
          htmlFor="email"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. xyz321@gmail.com."
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            content: "*",
            marginTop: "10px",
            paddingLeft: "5px",
            boxSizing: "border-box",
            height: "40px",
            width: "430px",
            border: "1px solid #E6E6E6",
            borderRadius: "10px",
            color: "#333333",
            fontSize: "18px",
          }}
        />

        <label
          htmlFor="password"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="e.g.xyz@6397."
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            marginTop: "10px",
            paddingLeft: "5px",
            boxSizing: "border-box",
            height: "40px",
            width: "430px",
            border: "1px solid #E6E6E6",
            borderRadius: "10px",
            color: "#333333",
            fontSize: "18px",
          }}
        />

        <button id="btn"
          type="submit"
          style={{
            fontWeight: "500",
            height: "40px",
            width: "245px",
            marginTop: "30px",
            marginBottom: "30px",
            marginLeft: "20%",
            marginRight: "50%",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ffc107",
            paddingTop: "5px",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
      <footer className="footer" style={{ position:"inherit",bottom:"0", width:"100%"}}>
        <p style={{ color: "white" }}>&copy; 2024 Sahkarya. All rights reserved.</p>
        <div id='icon' style={{color:"white"}}>
          <i class="ri-instagram-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-twitter-x-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-code-box-fill" style={{marginRight:"20px"}}></i>
        </div>
      </footer>
      <style jsx>{`
      .footer {
        text-align: center;
        margin-top: 2rem;
        padding: 1rem;
        background-color: #002447;
      }
      #icon i:hover{
        
        cursor: pointer;
        
        color: #ffc107;
      }
      #btn:hover{
        color: white;
      }
      `}</style>
    </>
  );
};

export default RegistrationForm;

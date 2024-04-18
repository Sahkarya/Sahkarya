import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    identity: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connecting to backend
    try {
      const response = await fetch("http://localhost:80/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);

        console.log("Successfully registered");
        setFormData({
          name: "",
          identity: "",
          phone: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log("error from register : ", error);
    }
  };

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
    <div
      style={{ backgroundImage: "URl('image8.jpeg')", backgroundSize: "cover", height:"50rem" }}
    >
      <h2
        style={{
          color: "rgb(0, 36, 71)",
          width: "100%",
          display: "grid",
          paddingTop: "20px",
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
          background: "rgba(221, 221, 222, 0.5)",
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
          type="number"
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
          type="number"
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

        <button
        id="btnn1"
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
      <style jsx>{`
      #btnn1:hover{
        color: white;
      }
      `}</style>
    </div>
    </>
  );
};

export default RegistrationForm;

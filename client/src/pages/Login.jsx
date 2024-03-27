import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [formData, setFormData] = useState({
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
    console.log(formData);

    // Connecting to backend
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        console.log("Succesful Login, Welcome to the Platform");
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log("error from register : ", error);
    }
  };

  return (
    <div>
      <h2
        style={{
          color: "rgb(0, 36, 71)",
          width: "100%",
          display: "grid",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
        }}
      >
        Login Form
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
          htmlFor="email"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. xyz321@gmail.com.."
          value={formData.email}
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
          htmlFor="password"
          style={{ marginTop: "30px", fontSize: "17px", fontWeight: "500" }}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="e.g.xyz@6397.."
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
          type="submit"
          style={{
            fontWeight: "500",
            height: "40px",
            width: "245px",
            marginTop: "30px",
            marginLeft: "20%",
            marginRight: "50%",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ffc107",
            paddingTop: "5px",
          }}
        >
          Log In
        </button>
      </form>
      <div
        style={{
          display: "flex",
          marginTop: "2.4rem",
          justifyContent: "center",
          fontWeight: "400",
          fontSize: "1.2rem",
        }}
      >
        <p
          style={{ width: "20rem", padding: ".5em", border: "1px solid #ccc" }}
        >
          Don't have an account?
          <a
            href="/register"
            style={{ textDecoration: "none", marginLeft: ".5rem" }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

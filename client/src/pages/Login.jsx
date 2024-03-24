import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
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
    <div><h2 style={{ color: "rgb(0, 36, 71)", width: "100%", display: "grid", marginTop: "50px", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", justifyContent: "center", paddingLeft: "20px" }}>

        <label htmlFor="email" style={{ marginTop: "30px", fontSize: "17px",fontWeight:"500" }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. xyz321@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ marginTop: "10px", paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }} />


        <label htmlFor="password" style={{ marginTop: "30px", fontSize: "17px",fontWeight:"500" }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="e.g.xyz@6397"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ marginTop: "10px", paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }} />

        <button id="btn" type="submit" style={{ fontWeight:"500", height: "40px", width: "245px", marginTop: "30px", marginLeft: "20%", marginRight: "50%", borderRadius: "10px", border: "none", backgroundColor: "#ffc107", paddingTop: "5px" }}>Sign In</button>
      </form>
      <div style={{display: "flex", marginTop: "10px", justifyContent: "center", fontWeight: "400", fontSize:"1.5rem"}}>
        <p style={{border:"1px solid black", width: "20%", padding:".5em", fontSize:"15px", display:"flex", alignItems:"center",justifyContent:"center" }}>Don't have an account?<a href="\register" style={{textDecoration:"none"}}>Sign Up</a></p>
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

export default Login;

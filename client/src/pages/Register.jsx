import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    <form onSubmit={handleSubmit} style = {{display: "grid", justifyContent: "center", paddingLeft: "20px"}}>
      
        <label htmlFor="name" style = {{marginTop:"30px",fontSize: "17px"}}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={formData.name}
          onChange={handleChange}
          required
          style = {{marginTop:"10px",paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px"}}/>
      
      
        <label htmlFor="email" style = {{marginTop:"30px",fontSize: "17px"}}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. xyz321@gmail.com.."
          value={formData.email}
          onChange={handleChange}
          required
          style = {{marginTop:"10px",paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px"}} />
      
    
        <label htmlFor="password" style = {{marginTop:"30px",fontSize: "17px"}}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="e.g.xyz@6397.."
          value={formData.password}
          onChange={handleChange}
          required
          style = {{marginTop:"10px",paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px"}}/>
      
      <button type="submit" style = {{height: "40px", width:"245px",marginTop:"30px",marginLeft:"20%",marginRight:"50%" , borderRadius: "10px",border:"none", backgroundColor:"#ffc107", paddingTop: "5px"}}>Sign Up</button>
    </form>
  );
};

export default RegistrationForm;

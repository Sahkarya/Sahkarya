import React, { useState } from "react";

const Concern = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    address: "",
    department: "",
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
      <form onSubmit={handleSubmit} method="POST" style = {{display: "grid", justifyContent: "center", paddingLeft: "20px"}}>
        <label htmlFor="name" style = {{fontSize: "17px"}}>Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name........"
          value={formData.name}
          onChange={handleChange}
          required
        style = {{paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "20px", color: "#333333", fontSize: "18px"}}/>
        <br />

        <label htmlFor="phone" style = {{fontSize: "17px"}}>Phone:</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="It must be 10 digits........."
          value={formData.phone}
          onChange={handleChange}
          required
          style = {{paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "20px", color: "#333333", fontSize: "18px"}}/>
        <br />

        <label htmlFor="message" style = {{fontSize: "17px"}}>Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="e.g. I would like to ask you......."
          value={formData.message}
          onChange={handleChange}
          required
          style = {{paddingLeft: "5px",boxSizing: "border-box", height: "100px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "20px", color: "#333333", fontSize: "18px"}}></textarea>
        <br />

        <label htmlFor="address" style = {{fontSize: "17px"}}>Address:</label>
        <br />
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your street line......."
          value={formData.address}
          onChange={handleChange}
          required
          style = {{paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "20px", color: "#333333", fontSize: "18px"}}/>
        <br />

        <label htmlFor="department" style = {{fontSize: "17px"}}>Department:</label>
        <br />
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Your department........"
          value={formData.department}
          onChange={handleChange}
          required
          style = {{paddingLeft: "5px",boxSizing: "border-box", height: "40px", width: "430px",border: "1px solid #E6E6E6", borderRadius: "20px", color: "#ffc107", fontSize: "18px"}}/>
        <br />

      <input type="submit" value="Submit" style = {{height: "40px", width:"245px", borderRadius: "20px",border:"none", backgroundColor:"#ffc107", marginBottom: "20px"}}/>
      </form>
    </>
  );
};

export default Concern;

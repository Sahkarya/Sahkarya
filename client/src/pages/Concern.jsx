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
    <div><h2 style={{ color: "rgb(0, 36, 71)", width: "100%", display: "grid", marginTop: "40px", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>Raise a Concern</h2>
      <form onSubmit={handleSubmit} method="POST" style={{ display: "grid", justifyContent: "center", paddingLeft: "20px" }}>
        <label htmlFor="name" style={{marginTop: "30px", fontSize: "17px",fontWeight:"500" }}>Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }} />
        <br />

        <label htmlFor="phone" style={{ fontSize: "17px",fontWeight:"500" }}>Phone:</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }} />
        <br />

        <label htmlFor="message" style={{ fontSize: "17px",fontWeight:"500" }}>Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Write your concern here"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ paddingLeft: "5px", boxSizing: "border-box", height: "100px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }}></textarea>
        <br />

        <label htmlFor="address" style={{ fontSize: "17px",fontWeight:"500" }}>Address:</label>
        <br />
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px", color: "#333333", fontSize: "18px" }} />
        <br />

        <label htmlFor="department" style={{ fontSize: "17px",fontWeight:"500" }}>Department:</label>
        <br />
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Department Responsible"
          value={formData.department}
          onChange={handleChange}
          required
          style={{ paddingLeft: "5px", boxSizing: "border-box", height: "40px", width: "430px", border: "1px solid #E6E6E6", borderRadius: "10px",color: "#333333", fontSize: "18px" }} />
        <br />

        <input type="submit" value="Submit" style={{ fontWeight:"500",height: "40px", width: "245px", borderRadius: "10px", border: "none", backgroundColor: "#ffc107", marginBottom: "20px" }} />
      </form>
      </div>
    </>
  );
};

export default Concern;

import AdminMap from "../components/AdminMap";

const Admin = () => {
  const getData = async (e) => {
    e.preventDefault();

    // Backend logic
    try {
      const response = await fetch("http://localhost:80/api/data/admin", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        alert("Seccessfull ");
        console.log(data);
      }
    } catch (error) {
      console.log("error recieving data", error);
    }
  };
  //I assume i get the data;
  const data = {
    department : 'MCD',
    department_id : 1,
    tags : [1,1],
    tags_coord : [[28.52963879308978,77.48245239257814],[28.62732258309424,77.32452392578126]]
  }
  

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.4rem",
        }}
      >
        <button type="button" class="btn btn-primary btn-lg" onClick={getData}>
          Refresh
        </button>
      </div>
      <div style={{ width: "500px", height: "500px" }}>
        <AdminMap data={data}/>
      </div>
    </>
  );
};

export default Admin;

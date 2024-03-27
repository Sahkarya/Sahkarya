const Admin = () => {
  const getData = async (e) => {
    e.preventDefault();

    // Backend logic
    try {
      const response = await fetch("http://localhost:5000/api/data/admin", {
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
    </>
  );
};

export default Admin;

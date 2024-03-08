import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <p>This is the Home Page</p>
      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          class="btn btn-outline-warning btn-lg"
          style={{ width: "32rem" }}
        >
          Raise a Concern
        </button>
      </div>
    </>
  );
};

export default Home;

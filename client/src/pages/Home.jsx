const Home = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image4.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="/concern" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn btn-outline-warning btn-lg"
            style={{ width: "32rem" }}
          >
            Raise a Concern
          </button>
        </a>
      </div>

      <div className="card">
        <div className="card-header">
          <b>Need Help</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Learn how this works</h5>
          <p className="card-text">
            If you are new to this platform, use the button below to learn how
            this works.
          </p>
          <a
            href="/about"
            className="btn"
            style={{ marginTop: "1rem", backgroundColor: "#ffc107" }}
          >
            How it Works
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

const Navbar = () => {
  const customCSS = {
    height: "6.4rem",
    fontSize: "1.6rem",
    backgroundColor: "#002447",
    color: "yellow",
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg" style={customCSS}>
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ fontSize: "2.6rem", color: "white" }}
            >
              Sahkarya
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link"
                  href="/explore"
                  style={{ color: "white" }}
                >
                  Explore
                </a>
                <a
                  className="nav-link"
                  href="/about"
                  style={{ color: "white" }}
                >
                  About Us
                </a>
                <a
                  className="nav-link"
                  href="/concern"
                  style={{ color: "yellow" }}
                >
                  Raise a Concern
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import { useAuth } from "../store/auth";
import { useEffect } from "react";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const forceUpdate = () => {
      window.dispatchEvent(new Event("resize"));
    };
    forceUpdate();
  }, [isLoggedIn]);

  const navbarStyle = {
    background: "linear-gradient(to right, #1e5799, #2989d8, #7db9e8)",
  };

  const blackFont = {
    color: "black",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ fontSize: "2.6rem", color: "black" }}
        >
          Sahkarya
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/explore" style={blackFont}>
              Explore
            </a>
            <a className="nav-link" href="/about" style={blackFont}>
              About Us
            </a>
            <a
              className="nav-link"
              href="/concern"
              style={{
                color: "black",
                backgroundColor: "#ffc107",
                borderRadius: "1rem",
              }}
            >
              Raise a Concern
            </a>
            {isLoggedIn ? (
              <a className="nav-link" href="/logout" style={blackFont}>
                Logout
              </a>
            ) : (
              <a className="nav-link" href="/login" style={blackFont}>
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

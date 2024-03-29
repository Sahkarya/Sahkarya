import { useAuth } from "../store/auth";
import { useEffect } from "react";

const Navbar = () => {
  const customCSS = {

    position:"abslute",
    width:"100%",
    height: "10vh",

    fontSize: "1.6rem",
    backgroundColor: "#002447",
    color: "yellow",
  };

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const forceUpdate = () => {
      window.dispatchEvent(new Event("resize"));
    };
    forceUpdate();
  }, [isLoggedIn]);

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
                  style={{ color: "#ffc107" }}
                >
                  Raise a Concern
                </a>

                {isLoggedIn ? (
                  <a
                    className="nav-link"
                    href="/logout"
                    style={{ color: "white" }}
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    href="/login"
                    style={{ color: "white" }}
                  >
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const history = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  const handleRedirectToLocalhost3001 = () => {
    // Redirect to localhost:3001
    window.location.href = "http://localhost:3000";
  };
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            UniConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comittees">
                  Committees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/approval">
                  Event Approval
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calender">
                  Calender
                </Link>{" "}
              </li>
            </ul>
            <form className="d-flex" role="search">
              {!isLoggedIn ? (
                <form className="d-flex" role="search">
                  <button
                    className="btn btn-outline-success"
                    to="/login"
                    type="submit"
                    onClick={handleLogout}
                  >
                  Logout
                  </button>
                </form>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={handleLogout}
                  to="/login"
                  type="submit"
                >
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import { set } from "mongoose";
import {React, useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const history = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history("/login");
  };

  const userRole = localStorage.getItem("role");
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true)
  };


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
            {(isLoggedIn ) && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">
                    Create Event
                  </Link>
                </li>
                {(true ) && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/applications">
                      Applications
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/comittees">
                    Committees
                  </Link>
                </li>
                {true
                  && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/approval">
                        Event Approval
                      </Link>
                    </li>
                  )}
                 
                    <>
                <li className="nav-item">
                  <Link className="nav-link" to="/calender">
                    TimeLine
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/comittees">
                  Committees
                </Link>
              </li>
              </>
                
              </ul>

            )}
            {isLoggedIn ? (
              
  <Link className="btn btn-outline-success" to="/login" onClick={handleLogout}>
    Logout
  </Link>
) : (
  <>
    <Link
      className="btn btn-outline-success"
      to="/login"
      type="submit"
      style={{marginLeft:'1200px'}}
      onClick={handleLogin}
       // Call handleLogin when clicking on the Login button
    >
      Login
    </Link>
    <Link
      className="btn btn-outline-success"
      to="/register"
      type="submit"
      style={{ marginLeft: "40px" }}
    >
      Register
    </Link>
  </>
)}

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

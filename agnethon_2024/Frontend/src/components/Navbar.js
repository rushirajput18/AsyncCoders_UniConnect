import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">UniConnect</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Events</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/comittees">
                      Committees
                    </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/calender">
                      Calender
                    </Link>        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

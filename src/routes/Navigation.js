import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <nav>
        <li className="nav_bar">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Project">Project</Link>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;
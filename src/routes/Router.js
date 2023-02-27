import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Project from "../components/Project";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigation />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter;
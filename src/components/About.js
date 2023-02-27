import React from "react";
import "./About.css"

const About = () =>{
  return(
    <>
    <div>About</div>
    <div className="skill">Skill
        <li><img src={require(`../assets/html_logo.png`)}></img>
        <img src={require(`../assets/css_logo.png`)}></img>
        <img src={require(`../assets/js_logo.jpg`)}></img>
        <img src={require(`../assets/React_logo.png`)}></img></li>
      Comunication
        <li><img src={require(`../assets/slack_logo.png`)}></img>
        <img src={require(`../assets/notion_logo.png`)}></img>
        <img src={require(`../assets/figma_logo.png`)}></img></li>
    </div>
    </>
  )
}

export default About;
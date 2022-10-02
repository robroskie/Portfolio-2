import React from "react";
import Card from "react-bootstrap/Card";

import { GiPaddles } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { BiGame } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luke Roblesky </span>
            from <span className="purple">Kelowna BC, Canada.</span>
            <br />I am in my third year of studies at UBC Okanagan, where I am
            working towards a BSc focusing on a major in computer science and minor in data science.
            <br />
            <br />
            When I'm not coding, you can probably find me...
          </p>
          <ul>
            <li className="about-activity">
              <GiPaddles /> Attempting to stand up on my paddleboard
            </li>
            <li className="about-activity">
              <FaVolleyballBall /> Playing basketball and beach volleyball
            </li>
            <li className="about-activity">
              <SiYourtraveldottv /> Travelling to countries with spicy street foods
            </li>
            <li className="about-activity">
              <BiGame /> Trying new Beat Saber songs on expert
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

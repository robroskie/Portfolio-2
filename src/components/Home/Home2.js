import Card from "react-bootstrap/Card";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About<span className="purple"> Me </span>
            </h1>

            <p className="home-about-body">
              <br />
              Currently located in Kelowna, BC but am open to relocating for the right internship opportunity. I am 
              a hard-working student academically, as seen b.y my GPA and merit-based awards. Although my studies are valuable,
              they are not my sole source of acquiring knowledge and developing skills. I spend my time outside class improving
              my programmig skills
              <i>
                <b className="purple"> Leetcode</b>
              </i>, learning new technologies such as  
              <i>
                <b className="purple"> React  </b>
              </i>
              (which is what this site is built in), and reading up on the latest trends in technology.
            </p>
            <p className="home-about-body">
            I have experience working with 
            <i>
                <b className="purple"> Web Development</b>,
              </i>
              <i>
                <b className="purple"> Natural Language Processing </b>,
              </i>
              <i>
                <b className="purple"> Databases </b>,
              </i> and 
              <i>
                <b className="purple"> Data Analysis </b>
              </i>,
              but am opening to learning whatever is required to best complete a task.

            </p>
   

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me</h1>
            <p>
              Feel free to <span className="purple">contact </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/robroskie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/robroskie/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

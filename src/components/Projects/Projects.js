import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flightfinder from "../../Assets/Projects/flightfinder.png";
import brainyard from "../../Assets/Projects/brainyard.png";
import airtraffic from "../../Assets/Projects/airtraffic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of the projects I've worked on recently <br></br> both
          as a part of coursework and out of personal interest.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flightfinder}
              isBlog={false}
              title="Flight Finder"
              description="An application used to help a user find the perfect flight for them. Built using html, CSS, Python and Flask. Rasa and Spacy were used in order to improve bot accuracy and overall conversational flow."
              ghLink="https://github.com/robroskie/Travel-Booking-Bot.git"
              // demoLink="https://github.com/robroskie/Travel-Booking-Bot.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainyard}
              isBlog={false}
              title="BrainYard"
              description="Used HTML5, CSS3 and Bootstrap to create responsive front-end interface to design Q/A website where users can discuss school topics, vote on
              answers and maintain a crypto wallet balance."
              ghLink="https://github.com/robroskie/BrainYard"
              // demoLink="https://github.com/robroskie/BrainYard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airtraffic}
              isBlog={false}
              title="Air Traffic"
              description="Exploratory data analysis is to investigate how much of an impact the COVID-19 outbreak had on the airline industry."
              ghLink="https://github.com/robroskie/Flight-Analysis/blob/main/README.ipynb"
              // demoLink="https://github.com/robroskie/Flight-Analysis/blob/main/README.ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

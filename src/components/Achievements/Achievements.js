import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import review1 from "../../Assets/Images/review1.jpg";
import review2 from "../../Assets/Images/review2.jpg";

function Achievements() {
  return (
    <Container fluid className="achievements-section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Student <strong className="purple">Testimonials</strong>
      </h1>

      <Col
     
        style={{width: '60em', paddingTop: "5em", paddingBottom: "5em" }}
        className="about-img"
      >
        <img src={review1} alt="about" className="img-fluid" />
      </Col>
      <Col
     
        style={{width: '60em', paddingTop: "5em", paddingBottom: "5em" }}
        className="about-img"
      >
        <img src={review2} alt="about" className="img-fluid" />
      </Col>
    </Container>
  );
}

export default Achievements;

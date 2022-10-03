import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

import Credit from "./Credits/Credit"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      {/* <Row> */}
         {/* <Col md="4" className="footer-copywright nopadding"> */}
        <Credit></Credit>
        {/* <Col md="4" className="footer-copywright nopadding">
          <h5 className="reference">Template adapted from</h5>
        </Col>

        <Col md="4" className="footer-github nopadding">
          <Button
            href="https://github.com/soumyajit4419/Portfolio"
            target="_blank"
            className="fork-btn-inner-footer"
          >
            <CgGitFork style={{ fontSize: "1em" }} />{" "}
            <AiFillStar style={{ fontSize: "1em" }} />
  </Button> */ }
        {/* </Col>  */}

        {/* <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/robroskie"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/robroskie/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col> */}
      {/* </Row> */}
    </Container>
  );
}

export default Footer;

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import './Credit.css';

function Credit() {
  return (
    <Row>
      <Col md={2}>
        <h6 className="reference">
          Adapted from{"  "}
          <a href="https://github.com/soumyajit4419/Portfolio" className="anchor"><b className="purple">here</b></a>
          {/* <Button
            href="https://github.com/soumyajit4419/Portfolio"
            target="_blank"
          >
            <CgGitFork style={{ fontSize: "1em" }} />{" "}
          </Button> */}
        </h6>
      </Col>
      <Col md={1} className="credit"></Col>

      <Col md={9} className="footer-body">
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
      </Col>
    </Row>
  );
}
export default Credit;

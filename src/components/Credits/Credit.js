import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
function Credit() {
  return (
    <Row>
      <Col md={2}>
        <h5 className="reference">Template adapted from</h5>
      </Col>
      {/* <Col md={1}>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </Col> */}
      <Col md={1} className="credit">
        <Button
          href="https://github.com/soumyajit4419/Portfolio"
          target="_blank"
          className="fork-btn-inner"
        >
          <CgGitFork style={{ fontSize: "1em" }} />{" "}
        </Button>
      </Col>

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

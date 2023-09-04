import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ÜBER <span className="purple"> MICH </span> 
            </h1>
            <p className="home-about-body">
              Hi, ich bin Informatiker Applikationsentwicklung im 1. Lehrjahr bei Swisscom.
          
              <br />
              <br />I habe schon Basic-Skills in
              <i>
                <b className="purple"> HTML & CSS, Javascript, React and Git. </b>
              </i>
              <br />
              <br />
              Ich interessiere mich für fast alles in der Informatik wie zum Beispiel &nbsp;
              <i>
                <b className="purple">Web Development, Frontend, Backend, Data, Security </b> und
                vieles mehr.{" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              Falls du ein motiviertern Developer für dein Projekt suchst, dann kontaktiere mich gerne. <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Koetbullar-Droide"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/jannik-lüthi-078833287"
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

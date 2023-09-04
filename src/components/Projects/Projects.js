import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Portfolio from "../../Assets/Projects/portfolio.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Entwicklung einer Portfolio Website für die Bewerbung bei Projekten in der Swisscom. React JS Template suchen und anpassen nach den persönlichen Bedürfnissen und online hosten."
              ghLink="https://github.com/Koetbullar-Droide/SwisscomPortfolio"
              demoLink="#"
            />
          </Col>

         

          

          

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

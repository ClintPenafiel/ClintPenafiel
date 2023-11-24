import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WisePlanner from "../../Assets/Projects/WisePlanner.png";
import DidYouKnow from "../../Assets/Projects/DidYouKnow.png";
import Zabbix from "../../Assets/Projects/Zabbix1.png";

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
              imgPath={DidYouKnow}
              isBlog={false}
              title="Did You Know..."
              description="A monthly email newsletter to share productivity tools to use in Microsoft Office 365 Applications, built with HTML, and CSS embedded in Outlook sent to 7000+ San Joaquin County employees. Featured a clickable logo to be redirected to the county website, as well as a learn more button that had PDF guides to start using the tools."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zabbix}
              isBlog={false}
              title="Zabbix"
              description="Created a Zabbix monitoring dashboard for the infrastructures team to monitor the health of the servers and network"
              
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WisePlanner}
              isBlog={false}
              title="Wise Planner"
              description="To Do list application developed with PyQt6 python library and CSS for styling. The application allows users to create, edit, and delete tasks. The application also allows users to set a due date for each task and sort the tasks by due date or priority. The application also has a Progress Bar that shows the percentage of tasks completed."            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Grocery Basket Application"
              description="Developed an e-commerce app with VueJS frontend and Flask backend. Features include product search, filters, and cart management. Vendors can list products post-admin approval. Redis is used for caching, and Celery handles email notifications. The platform supports seamless shopping experiences for users and efficient product management for local store vendors."
              ghLink="https://github.com/Nikhil-IIT/Grocery-Basket"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Taxi Fare Detection"
              description="Developed machine learning models to predict taxi fares using ride attributes. Implemented data preprocessing techniques like missing data imputation and feature engineering. Conducted correlation and covariance analysis to identify key predictors. Trained and evaluated models including Linear Regression, Polynomial Regression, and Random Forest for accurate fare predictions."
              ghLink="https://github.com/Nikhil-IIT/Machine-Learning-Project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Socail Media Application"
              description="Developed a social media app with React.js, Express.js, and MySQL. Key features include user authentication, post creation, liking, commenting, deletion, and user following/unfollowing. The app also supports profile updates and a toggle between light/dark modes, ensuring a robust and user-friendly experience."
              ghLink="https://github.com/Nikhil-IIT/Socail-Media-Application"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Business Analysis Project"
              description="Analyzed business challenges like inventory and sales issues using Microsoft Excel. Utilized Tableau for visualizing trends and insights, aiding data-driven decision-making. Developed personalized Power BI dashboards to provide actionable insights, improving business operations for stakeholders."
              ghLink="https://github.com/Nikhil-IIT/Business-Analysis-Project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Shopify"
              description="Built a dynamic e-commerce website using React.js, ensuring a responsive, visually appealing user experience with raw CSS. Developed both the front-end and back-end, including admin and user panels. Employed the MERN stack (MongoDB, Express.js, React.js, Node.js) to create a feature-rich platform with a polished interface."
              ghLink="https://github.com/Nikhil-IIT/Shopify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blog Site"
              description="Developed a blog site using Flask as the backend with Jinja templates, HTML, and CSS for the frontend. The platform allows admins to write blogs while users can comment, like, and save posts for future reading. The site provides a seamless and interactive experience, enabling easy content management and user engagement."
              ghLink="https://github.com/Nikhil-IIT/Blog-Site-Using-Flask"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

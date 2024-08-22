import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import landt from "../../Assets/landt.jpg";
import iitmcsr from "../../Assets/iitmcsr.jpg";
import leetcode from "../../Assets/leetcode.png";
import gfg from "../../Assets/gfg.png";
import './Founder.css';

function Achievements() {
  const achievements = [
    {
      title: "L&T Scholarship",
      description:
        "Awarded a scholarship of 16,000 for academic excellence and leadership skills.",
      imageSrc: landt,
    },
    {
      title: "IITM CSR Partner Scholarship",
      description:
        "Awarded a scholarship of 62,500 for outstanding performance in the Diploma in Data Science and Programming program.",
      imageSrc: iitmcsr,
    },
    {
      title: "400+ Questions on GitHub",
      description: "Solved 400+ questions on GitHub.",
      imageSrc: leetcode,
    },
    {
      title: "400+ Questions on Leetcode",
      description: "Solved 400+ questions on Leetcode.",
      imageSrc: gfg,
    },
  ];

  return (
    <Container fluid className="achievements-section">
      <h1 className="project-heading">
          My <strong className="purple" style={{ display: "inline-block", paddingTop: "70px" }}>Achievements</strong>
      </h1>


      {/* YouTube Video at 34:33 */}
      <div className="video-container" style={{ marginBottom: "40px", position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Y0g2b3J8hXM?start=2077"
          title="Achievements Video"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "20px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>

      {/* Achievements Section */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {achievements.map((achievement, index) => (
          <Col md={6} sm={12} key={index} style={{ marginBottom: "30px" }}>
            <Card className="achievement-card-view">
              <Row className="align-items-center">
                <Col xs={4} className="card-img">
                  <Card.Img
                    variant="top"
                    src={achievement.imageSrc}
                    alt={achievement.title}  
                  />
                  <Card.Body>
                    <Card.Title style={{paddingTop:"40px" }}>{achievement.title}</Card.Title>
                    <Card.Text>{achievement.description}</Card.Text>
                  </Card.Body>
                </Col>
                
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Achievements;

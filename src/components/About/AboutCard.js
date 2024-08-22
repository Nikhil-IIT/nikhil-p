import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">NIKHIL Kumar</span>, hailing from the vibrant city of <span className="purple"> Chandigarh, India</span>.
            <br />
            🎓 With a B.Tech in Computer Science and a B.S. in Programming and Data Science from IIT Madras 
            <br />
            under my belt, I'm all about blending tech with creativity. Coding is my playground, but there's more to my story.
            <br />
            <br />
            🎸 When I'm not cracking code, you'll find me making music—whether it’s strumming my guitar or crafting new tunes. 
            <br />
            <br />
            💪 The gym is my second home, where I push limits and stay sharp.
            <br />
            And when it's time to unwind, I dive into thought-provoking books on business, management, and the art of building companies 📚.
            <br />
            <br />
            In short, I'm all about leveling up, whether it's in tech, tunes, or transforming ideas into reality 🚀.
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> I like GYM 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "WhenEver the World tries to push you back, Just step back, take a Deep Breath, Relax, and then leap forward."{" "}
          </p>
          <footer className="blockquote-footer">NIKHIL Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

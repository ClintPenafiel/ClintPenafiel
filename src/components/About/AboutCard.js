import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Clint Penafiel </span>
            from <span className="purple"> Hayward, California.</span>
            <br />
            I am currently an infrastructures intern at the County of San Joaquin.
            <br />
            I have completed my BSc (BSc) in Computer Science at the University of the Pacific.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercising
            </li>
            <li className="about-activity">
              <ImPointRight /> Baking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating impactful solutions that leave a lasting impression!"{" "}
          </p>
          <footer className="blockquote-footer">Clint Penafiel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

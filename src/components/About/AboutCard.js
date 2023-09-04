import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, Ich bin <span className="purple">Jannik Lüthi </span>
            aus <span className="purple"> der Schweiz im Aargau.</span>
            <br /> Ich mache die Lehre bei Swisscom als Applikationsentwickler und bin gerade im 1. Lehrjahr.
            <br />
            
            <br />
            <br />
            Neben dem Coding mache ich auch viele andere Sachen, die ich mag:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight />Leiter in der Cevi(Pfadfinder)
            </li>
            <li className="about-activity">
              <ImPointRight /> Kochen & Essen
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Enjoy the journey!"{" "}
          </p>
          <footer className="blockquote-footer">Ali Abdaal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

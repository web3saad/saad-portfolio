import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, Im <span className="purple">Sayad </span>
              from <span className="purple"> Mangalore , India</span>
            <br />
            I am currently pursuing an MCA degree.
            <br />
            I have three years of experience in freelancing and specialize in Web3 Field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web3 Community Building
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building the future, one block at a time"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

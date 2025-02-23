import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdfunding from "../../Assets/Projects/crowdfunding.jpg";
import cryptoBot from "../../Assets/Projects/cryptoLive.png";
import iotDashboard from "../../Assets/Projects/iotDashboard.png";
import freelancerPlatform from "../../Assets/Projects/freelancerPlatform.jpeg";
import nftMarketplace from "../../Assets/Projects/nftMarketplace.jpg";
import trafficTracker from "../../Assets/Projects/trafficTracker.webp";

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
              imgPath={crowdfunding}
              isBlog={false}
              title="Crowdfunding Platform using Blockchain"
              description="A crowdfunding platform built on Ethereum, allowing users to create and contribute to campaigns using smart contracts for transparency and security."
              ghLink="https://github.com/web3saad/EtherFund"
              demoLink="#" // Add demo link when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoBot}
              isBlog={false}
              title="Live Crypto Price Bot"
              description="A real-time crypto price bot that fetches & updates live cryptocurrency prices every minute, providing real-time alerts to users."
              ghLink="https://github.com/web3saad/Live-Crypto-Price"
              demoLink="#" // Add demo link when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotDashboard}
              isBlog={false}
              title="IoT Dashboard using Cloud"
              description="An IoT data visualization dashboard that collects and displays real-time sensor data using AWS IoT Core, DynamoDB, and React."
              ghLink="https://github.com/web3saad/iot-dashboard"
              demoLink="#" // Add demo link when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freelancerPlatform}
              isBlog={false}
              title="Freelancer Platform using Blockchain"
              description="blockchain based freelancing platform where clients can post jobs, freelancers can bid, and payments are secured through smart contracts."
              ghLink="https://github.com/web3saad/freelance-platform"
              demoLink="#" // Add demo link when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftMarketplace}
              isBlog={false}
              title="NFT Marketplace using Blockchain"
              description="A decentralized NFT marketplace where users can mint, buy, and sell NFTs securely using blockchain technology."
              ghLink="https://github.com/web3saad/nft-marketplace"
              demoLink="#" // Add demo link when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trafficTracker}
              isBlog={false}
              title="Traffic Congestion Tracker"
              description="A traffic congestion tracking system that uses real-time data and machine learning to predict and visualize traffic conditions."
              ghLink="https://github.com/web3saad/traffic-tracker"
              demoLink="#" // Add demo link when available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


import React from "react";
import { Card, Button } from "react-bootstrap";
import { ArrowLeft } from "react-feather";

import "../App.css";
const AboutMe = (props) => {
  return (
    <Card
      className="h-100 w-75 align-self-center shadow-lg my-2"
      style={{ minWidth: "200px", backgroundColor: "#f8f9fa" }}>
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards("home")}>
        <ArrowLeft />
      </Button>
      <Card.Body className="w-75 align-self-center mb-3 overflow-auto">
        <h3 className="text-center">About Me</h3>
        <h6>Quick Bits</h6>
        <p>
          Hi, I'm Alex! Lately, I've been primarily developing in Java + Spring
          for work in addition to React and Node for my side projects. Learning
          new things is always fun, so I love to approach new problems where I
          can walk away with more knowledge. I am very comfortable writing SQL
          and dealing with backend interactions with databases. Hop over to the
          projects card or the GitHub link below to see some of the things that
          I'm working on!
        </p>
        <h6>Deep Dive</h6>
        <p>
          I first became interested in programming in middle school where I
          learned how to make programs on the TI-84 graphing calculator to help
          with homework and tests, but mainly to make some primitive games. I
          then took the first course available on Visual Basic in high school.
          After that, I took every computer related course that my school
          offered and helped start a programming club, where we helped other
          students learn to program.
        </p>
        <p>
          After a year of college for computer science, I returned home where I
          began working in a restaurant and found another passion in cooking. I
          worked at the same restaurant for five years and considered going to
          culinary school instead of returning to college for computer science.
        </p>
        <p>
          In the end, I knew my true passion was with technology - though you
          can catch me cooking up something fun and interesting at potlucks! I
          went back to college at the University of Arkansas Little Rock to
          finish my computer science degree. I was instantly hooked on all the
          concepts and new technologies, such as React. I enjoy learning and
          testing programs out in my freetime. During my final semester at UALR,
          I was grateful to obtain an internship as a tester at Acxiom, which
          led to a full-time Tester position. In this role, I learned skills
          that are helpful in development roles such as troubleshooting and how
          to effectively collaborate with coworkers.
        </p>
        <p>
          Early last year, I started my current position as a Software Developer
          using Javascript and Java with the Spring Boot framework. I have
          learned a lot while in this position and have lead project releases.
        </p>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;

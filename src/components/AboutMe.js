import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';

import '../App.css';
const AboutMe = (props) => {
  return (
    <Card
      className="h-100 w-75 align-self-center shadow-lg mb-2"
      style={{ minWidth: '200px', backgroundColor: '#f8f9fa' }}
    >
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards('home')}
      >
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
          I first became interested in programming in high school where I
          started with a course in Visual Basic. After that, I took every
          computer related course that my school offered and helped start a
          programming club, where we helped other students learn to program.{' '}
        </p>
        <p>
          After a year of college for computer science, I returned home where I
          began working in a restaurant and found another passion in cooking. I
          worked at the same restaurant for five years and considered going to
          culinary school instead of returning to college for computer science.{' '}
        </p>
        <p>
          I ended up decided that I wanted to do something technical for a
          living so I resumed classes at University of Arkansas Little Rock. I
          began trying to learn as much as I could about the concepts and new
          technologies such as React. In my last semester at UALR, I got an
          internship as a tester at Acxiom where I was eventually hired on full
          time. In this role, I have learned skills that are helpful in
          development roles such as troubleshooting and how to effectively
          collaborate with coworkers.
        </p>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;

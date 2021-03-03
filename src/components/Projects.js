import React, { useState, useEffect } from 'react';
import { Card, Button, Nav, Accordion } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';

import ProjectService from '../services/ProjectsService';

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useState(() => {
    console.log('mounting projects');
    ProjectService.getProjects().then((projectList) => {
      for (let i = 0; i < projectList.length; i++) {
        setProjects((projects) => [
          ...projects,
          <Card className="shadow-lg" key={projectList[i].id}>
            <Accordion.Toggle as={Card.Header} eventKey={projectList[i].id}>
              {projectList[i].full_name}
            </Accordion.Toggle>
            <Accordion.Collapse
              className="overflow-auto"
              eventKey={projectList[i].id}
            >
              <Card.Body className="w-100">
                <p>{projectList[i].description}</p>
                <Button variant="secondary" href={projectList[i].html_url}>
                  GitHub Repo
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>,
        ]);
      }
      setLoading(false);
      console.log(projects);
    });
  }, []);

  return (
    <Card
      className="h-100 w-75 align-self-center overflow-auto shadow-lg my-2"
      style={{ minWidth: '200px', backgroundColor: '#f8f9fa' }}
    >
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards('home')}
      >
        <ArrowLeft />
      </Button>
      <h3 className="text-center">Projects</h3>
      <Card.Body className="w-75 align-self-center">
        {loading ? (
          'Loading'
        ) : (
          <Accordion defaultActiveKey="0">{projects}</Accordion>
        )}
      </Card.Body>
    </Card>
  );
};

export default Projects;

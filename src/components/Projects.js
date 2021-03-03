import React, { useState, useEffect } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
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
          <div key={projectList[i].id}>
            <h3>{projectList[i].full_name}</h3>
            <Button variant="secondary" href={projectList[i].html_url}>
              GitHub Repo
            </Button>
            <p>{projectList[i].description}</p>
          </div>,
        ]);
      }
      setLoading(false);
      console.log(projects);
    });
  }, []);

  return (
    <Card
      className="h-100 w-75 align-self-center overflow-auto shadow-lg mb-2"
      style={{ minWidth: '200px', backgroundColor: '#f8f9fa' }}
    >
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards('home')}
      >
        <ArrowLeft />
      </Button>
      <Card.Body className="w-75 align-self-center">
        {loading ? 'Loading' : projects}
      </Card.Body>
    </Card>
  );
};

export default Projects;

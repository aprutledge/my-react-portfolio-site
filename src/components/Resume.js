import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import { Document, Page, pdfjs } from 'react-pdf';

import '../App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props) => {
  return (
    <Card
      className="h-100 w-75 align-self-center align-content-center shadow-lg mb-2"
      style={{ minWidth: '200px', backgroundColor: '#f8f9fa' }}
    >
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards('home')}
      >
        <ArrowLeft />
      </Button>
      <div className="mx-auto overflow-auto">
        <Document
          file={process.env.PUBLIC_URL + '/resources/alex resume.pdf'}
          renderMode="svg"
        >
          <Page pageNumber={1} className="scale-down" />
        </Document>
      </div>
    </Card>
  );
};

export default Resume;

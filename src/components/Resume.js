import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ArrowLeft } from "react-feather";
import { Document, Page, pdfjs } from "react-pdf";
import { useMediaQuery } from "react-responsive";

import "../App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props) => {
  const [showPdf, setShowPdf] = useState(true);
  const [scale, setScale] = useState(1);
  const isBigScreen = useMediaQuery({ query: "(min-width: 2400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1290px)" });
  const isMedScreen = useMediaQuery({ query: "(min-width: 900px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 1px)" });

  const scalePDF = () => {
    if (isBigScreen) {
      setShowPdf(true);
      setScale(2);
    } else if (isLargeScreen) {
      setShowPdf(true);
      setScale(1.5);
    } else if (isMedScreen) {
      setShowPdf(true);
      setScale(0.75);
    } else if (isSmallScreen) {
      setShowPdf(false);
      console.log(showPdf);
      setScale(0.5);
    } else {
      setShowPdf(true);
      setScale(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", scalePDF);
    return () => window.removeEventListener("resize", scalePDF);
  });

  return (
    <Card
      className="h-75 w-75 align-self-center align-content-center shadow-lg my-2 pb-3"
      style={{ minWidth: "200px", backgroundColor: "#f8f9fa" }}>
      <Button
        variant="light"
        className="text-left"
        onClick={() => props.navigateCards("home")}>
        <ArrowLeft />
      </Button>
      <Button
        variant="secondary"
        className="mx-3"
        href={process.env.PUBLIC_URL + "/resouces/resume.pdf"}
        download={"Alex Rutledge Resume.pdf"}>
        Download
      </Button>
      {showPdf ? (
        <div className="mx-auto overflow-auto">
          <Document
            file={process.env.PUBLIC_URL + "/resources/resume.pdf"}
            renderMode="canvas">
            <Page
              pageNumber={1}
              size="A4"
              scale={scale}
              renderTextLayer={false}
            />
          </Document>
        </div>
      ) : null}
    </Card>
  );
};

export default Resume;

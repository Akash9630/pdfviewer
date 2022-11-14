import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import { GrNext, GrPrevious } from "react-icons/gr";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const divRef = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prevState) => prevState + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <div ref={divRef}
      
      >
        <div style={{
            height:"50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",            
            color:"#ffffff",
            fontSize:"32px",
            backgroundColor: "#323639",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
            }}
        >
          {pageNumber}/{numPages}
        </div>
        <div style={{ margin: "10px 40px", display:"flex", justifyContent: 'center'
}}>
          {pageNumber > 1 && (
            <button style= {{marginRight:"20px"}} onClick={handlePreviousPage}>
              <GrPrevious />
            </button>
          )}
          {pageNumber < numPages && (
            <button onClick={handleNextPage}>
              <GrNext />
            </button>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            <Page
              pageNumber={pageNumber}
              width={divRef.current?.clientWidth * 0.95}
            />
          </Document>
        </div>
      </div>
    </>
  );
};

export default PdfViewer;



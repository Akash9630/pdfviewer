import React from "react";
import samplePdf from "./Sample.pdf";
import PdfViewer from "./Sample";

function App() {
  return (
    <div className="App">
      <PdfViewer pdf={samplePdf} />
    </div>
  );
}
export default App;

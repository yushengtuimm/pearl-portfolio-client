import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  ReactElement,
} from "react";
import { FileInfo } from "../../lib/dto";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PdfDocument = ({ file }: { file: FileInfo }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState(null);

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function onPageLoadSuccess(page) {
    // const textLayers = document.querySelectorAll(
    //   ".react-pdf__Page__textContent"
    // );
    // textLayers.forEach((layer: HTMLElement) => {
    //   const { style } = layer;
    //   style.top = "0";
    //   style.left = "0";
    //   style.transform = "";
    // });
  }

  const isLoading = renderedPageNumber !== pageNumber;

  return (
    <div className="group">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {isLoading && renderedPageNumber ? (
          <Page key={renderedPageNumber} pageNumber={renderedPageNumber} />
        ) : null}
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          renderTextLayer={false}
          onLoadSuccess={onPageLoadSuccess}
          onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
        />
        <div className="absolute bottom-1/20 left-1/2 bg-white opacity-0 rounded-sm transform -translate-x-1/2 transition opacity ease-in-out duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="text-xs w-11 h-11 focus:outline-none rounded"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            &lt;
          </button>
          <span className="text-xs px-2">
            {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </span>
          <button
            type="button"
            className="text-xs w-11 h-11 focus:outline-none rounded"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            &gt;
          </button>
        </div>
      </Document>
    </div>
  );
};

export default PdfDocument;

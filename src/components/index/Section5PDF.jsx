import { pdfjs, Document, Page } from 'react-pdf';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Section5PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='flex mt-[300px]'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] flex items-center sticky top-14 md:pt-4'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>JORNAL PESSOAL</span>
        </div>
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='w-fit'>
          <Document
            file='/assets/jornal-pessoal-edext.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
            // className='mx-auto'
            // style={{ display: 'flex', alignItems: 'center' }}
          >
            <Page
              renderTextLayer={false}
              pageNumber={pageNumber}
              pageIndex={0}
              // style={{ display: 'flex', alignItems: 'center' }}
            />
          </Document>
          {/* <iframe
            src='/assets/jornal-pessoal-edext.pdf'
            // frameborder='0'
            className='w-[600px] h-[900px]'
          ></iframe> */}
        </div>

        <div className='h-full flex flex-col justify-center'>
          <button
            className=''
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((curr) => curr - 1)}
          >
            previous page
          </button>
          <button
            className=''
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((curr) => curr + 1)}
          >
            next page
          </button>
        </div>
      </div>
    </div>
  );
}

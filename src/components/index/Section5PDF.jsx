import { pdfjs, Document, Page } from 'react-pdf';
import { useState } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';

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
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>JORNAL PESSOAL</span>
        </div>
      </div>

      <div className='relative w-full flex justify-center items-center md:pt-4'>
        <div className='absolute top-4 right-4'>
          página {pageNumber} de {numPages}
        </div>
        <div className='mr-3 h-full flex flex-col justify-center'>
          <button
            className=''
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((curr) => curr - 1)}
          >
            <GrLinkPrevious size={25} />
          </button>
        </div>

        <div className='w-fit'>
          <Document
            file='/assets/jornal-pessoal-edext.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
            // className='mx-auto'
            // style={{ display: 'flex', alignItems: 'center' }}
          >
            <Page
              renderTextLayer={false}
              renderAnnotationLayer={false}
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

        <div className='ml-3 h-full flex flex-col justify-center'>
          <button
            className=''
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((curr) => curr + 1)}
          >
            <GrLinkNext size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

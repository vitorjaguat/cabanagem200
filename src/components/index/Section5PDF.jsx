import { pdfjs, Document, Page } from 'react-pdf';
import { useState, useRef, useCallback } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { useMediaQuery } from '@/utils/useMediaQuery';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Section5PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const mdMediaQuery = useMediaQuery('md');
  const documentRef = useRef();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  //avoiding black flickering:
  const containerRef = useRef();

  const hidePageCanvas = useCallback(() => {
    const canvas = containerRef.current.querySelector('canvas');
    if (canvas) canvas.style.visibility = 'hidden';
  }, [containerRef]);
  const showPageCanvas = useCallback(() => {
    const canvas = containerRef.current.querySelector('canvas');
    if (canvas) canvas.style.visibility = 'visible';
  }, [containerRef]);

  const onPageLoadSuccess = useCallback(() => {
    hidePageCanvas();
  }, [hidePageCanvas]);
  const onPageRenderSuccess = useCallback(() => {
    showPageCanvas();
  }, [showPageCanvas]);
  const onPageRenderError = useCallback(() => {
    showPageCanvas();
  }, [showPageCanvas]);

  console.log(pageNumber);

  const prevPage = () => {
    if (pageNumber === numPages) {
      setPageNumber((curr) => curr - 2);
    } else if (pageNumber === 2) {
      setPageNumber((curr) => curr - 1);
    } else {
      setPageNumber((curr) => curr - 2);
    }
  };

  const nextPage = () => {
    if (pageNumber === 1) {
      setPageNumber((curr) => curr + 1);
    } else if (pageNumber > 1) {
      setPageNumber((curr) => curr + 2);
    }
  };

  return (
    <div className='flex mt-[300px] pb-[900px]'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>JORNAL PESSOAL</span>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row justify-center md:pt-4 w-full overflow-hidden'>
        {/* <div className='hidden md:block absolute top-4 right-4 text-sm'>
          página {pageNumber} de {numPages}
        </div> */}
        <div className='hidden w-fit md:flex mr-3 h-full flex-col justify-center'>
          <button
            className=''
            disabled={pageNumber <= 1}
            onClick={() => prevPage()}
          >
            <GrLinkPrevious size={25} />
          </button>
        </div>

        <div
          className='w-[auto] h-[466px] md:h-[733px] md:flex overflow-hidden md:overflow-auto'
          style={{
            width:
              mdMediaQuery && pageNumber !== 1 && pageNumber !== numPages
                ? '1100px'
                : '550px',
          }}
          ref={containerRef}
        >
          <Document
            file='/assets/jornal-pessoal-edext.pdf'
            onLoadSuccess={() => {
              onDocumentLoadSuccess({ numPages: 32 });
              if (!mdMediaQuery) {
                documentRef.current.style.width = '350px';
                documentRef.current.style.overflow = 'hidden';
              }
            }}
            className='flex'
            // width={mdMediaQuery ? 550 : 350}
            inputRef={documentRef}
            // style={{ display: 'flex', alignItems: 'center' }}
            // renderMode='svg'
          >
            <Page
              // width={smScreen ? '200' : '400'}
              width={mdMediaQuery ? 550 : 350}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              pageNumber={pageNumber}
              // pageIndex={0}
              onLoadSuccess={onPageLoadSuccess}
              onRenderSuccess={onPageRenderSuccess}
              onRenderError={onPageRenderError}
              className='overflow-hidden'
              style={{ overflow: 'hidden' }}
              // className='bg-transparent'
              // canvasBackground='#a1a1a1'
              // style={{ display: 'flex', alignItems: 'center' }}
              // loading={

              // }
            />
            {mdMediaQuery && pageNumber !== 1 && pageNumber < numPages && (
              <Page
                // width={smScreen ? '200' : '400'}
                width={mdMediaQuery ? 550 : 350}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                pageNumber={pageNumber + 1}
                // pageIndex={0}
                onLoadSuccess={onPageLoadSuccess}
                onRenderSuccess={onPageRenderSuccess}
                onRenderError={onPageRenderError}
                // className='bg-transparent'
                // canvasBackground='#a1a1a1'
                // style={{ display: 'flex', alignItems: 'center' }}
                // loading={

                // }
              />
            )}
          </Document>
          {/* <iframe
            src='/assets/jornal-pessoal-edext.pdf'
            // frameborder='0'
            className='w-[600px] h-[900px]'
          ></iframe> */}
        </div>

        <div className='hidden md:flex ml-3 h-full flex-col justify-center'>
          <button
            className=''
            disabled={pageNumber >= numPages}
            onClick={() => nextPage()}
          >
            <GrLinkNext size={25} />
          </button>
        </div>

        <div className='md:hidden w-full flex gap-10 items-center justify-center py-4'>
          <button
            className=''
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((curr) => curr - 1)}
          >
            <GrLinkPrevious size={18} />
          </button>
          <div className='text-xs'>
            página {pageNumber} de {numPages}
          </div>
          <button
            className=''
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((curr) => curr + 1)}
          >
            <GrLinkNext size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

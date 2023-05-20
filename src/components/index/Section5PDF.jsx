import { pdfjs, Document, Page } from 'react-pdf';
import { useState, useRef, useCallback } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { useMediaQuery } from '@/utils/useMediaQuery';
import Image from 'next/image';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Section5PDF() {
  const [numPages, setNumPages] = useState(31);
  const [pageNumber, setPageNumber] = useState(0);
  const mdMediaQuery = useMediaQuery('md');
  const documentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //new jornal:
  let imageDataArr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  const imageData = imageDataArr.map((page, i) => ({
    src:
      i < 9
        ? '/assets/jp/JP_00' + (i + 1) + '.jpg'
        : '/assets/jp/JP_0' + (i + 1) + '.jpg',
    width: 1350,
    height: 1800,
    loading: 'lazy',
    alt: 'Jornal Pessoal | Edição Extraordinária',
  }));
  // console.log(imageData);
  console.log(pageNumber);

  //old jornal:
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  //avoiding black flickering:
  // const containerRef = useRef();

  // const hidePageCanvas = useCallback(() => {
  //   const canvas = containerRef.current.querySelectorAll('canvas');
  //   if (canvas.length) {
  //     canvas.forEach((cv) => (cv.style.visibility = 'hidden'));
  //   }
  // }, [containerRef]);
  // const showPageCanvas = useCallback(() => {
  //   const canvas = containerRef.current.querySelectorAll('canvas');
  //   if (canvas.length) {
  //     canvas.forEach((cv) => (cv.style.visibility = 'visible'));
  //   }
  // }, [containerRef]);

  // const onPageLoadSuccess = useCallback(() => {
  //   hidePageCanvas();
  // }, [hidePageCanvas]);
  // const onPageRenderSuccess = useCallback(() => {
  //   showPageCanvas();
  // }, [showPageCanvas]);
  // const onPageRenderError = useCallback(() => {
  //   showPageCanvas();
  // }, [showPageCanvas]);

  const prevPage = () => {
    if (pageNumber === imageData.length - 1) {
      setPageNumber((curr) => curr - 2);
    } else if (pageNumber === 1) {
      setPageNumber(0);
    } else {
      setPageNumber((curr) => curr - 2);
    }
  };

  const nextPage = () => {
    if (pageNumber === 0) {
      setPageNumber((curr) => curr + 1);
    } else if (pageNumber > 0) {
      setPageNumber((curr) => curr + 2);
    }
  };

  //Lightbox functions:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);
  const gotoNext = () =>
    currentImageIndex + 1 < imageData.length &&
    setCurrentImageIndex(currentImageIndex + 1);
  const onClose = () => setIsOpen(false);

  return (
    <div className='flex my-40'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl', height: 'calc(100%-20px)' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>
            JORNAL PESSOAL&ensp;&ensp;Edição Extraordinária
          </span>
        </div>
      </div>
      <div className='flex flex-col justify-center md:pt-4 w-full overflow-hidden'>
        <div className='relative flex flex-col md:flex-row justify-center w-full overflow-hidden'>
          {/* <div className='hidden md:block absolute top-4 right-4 text-sm'>
          página {pageNumber} de {numPages}
        </div> */}
          <div className='hidden w-fit md:flex mr-3 h-full flex-col justify-center'>
            <button
              className='cursor-pointer'
              disabled={pageNumber <= 0}
              onClick={() => prevPage()}
            >
              <IoIosArrowBack size={25} />
            </button>
          </div>

          {/* PAGES */}
          <div
            className='h-[467px] md:h-[733px] md:flex overflow-hidden md:overflow-auto'
            style={{
              width:
                mdMediaQuery && pageNumber !== 0 && pageNumber !== 31
                  ? '1100px'
                  : '550px',
            }}
            // ref={containerRef}
          >
            {/* <Document
            file='/assets/jornal_pessoal_web.pdf'
            onLoadSuccess={() => {
              onDocumentLoadSuccess({ numPages: 32 });
              if (!mdMediaQuery) {
                // console.log(documentRef);
                documentRef.current.style.width = '350px';
                documentRef.current.style.overflow = 'hidden';
                documentRef.current.style.margin = 0;
              }
            }}
            className='flex'
            // width={mdMediaQuery ? 550 : 350}
            inputRef={documentRef}
            // style={{ display: 'flex', alignItems: 'center' }}
            // renderMode='svg'
          > */}
            <Image
              src={imageData[pageNumber].src}
              width={1350}
              height={1800}
              className='cursor-pointer h-[466px] md:h-auto w-[330px] md:w-auto'
              // fill
              alt={imageData[0].alt}
              onClick={() => {
                setCurrentImageIndex(pageNumber);
                setIsOpen(true);
              }}
            />
            {mdMediaQuery && pageNumber !== 0 && pageNumber !== 31 && (
              <Image
                src={imageData[pageNumber + 1].src}
                width={1350}
                height={1800}
                className='cursor-pointer'
                // fill
                alt={imageData[0].alt}
                onClick={() => {
                  setCurrentImageIndex(pageNumber);
                  setIsOpen(true);
                }}
              />
            )}

            <Lightbox
              isOpen={isOpen}
              onPrev={gotoPrevious}
              onNext={gotoNext}
              onClose={onClose}
              images={imageData}
              currentIndex={currentImageIndex}
              singleClickToZoom
              renderPrevButton={({ canPrev }) =>
                canPrev && <PrevButton gotoPrevious={gotoPrevious} />
              }
              renderNextButton={({ canNext }) =>
                canNext && (
                  <NextButton setIsOpen={setIsOpen} gotoNext={gotoNext} />
                )
              }
              renderImageOverlay={() => (
                <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
              )}
            />

            {/* <Page
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
            loading={''}
            // className='bg-transparent'
            // canvasBackground='#a1a1a1'
            // style={{ display: 'flex', alignItems: 'center' }}
            // loading={

            // }
          /> */}
            {/* {mdMediaQuery && pageNumber !== 1 && pageNumber < numPages && (
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
              loading={''}
              // className='bg-transparent'
              // canvasBackground='#a1a1a1'
              // style={{ display: 'flex', alignItems: 'center' }}
              // loading={

              // }
            />
          )} */}
            {/* </Document> */}
            {/* <iframe
            src='/assets/jornal-pessoal-edext.pdf'
            // frameborder='0'
            className='w-[600px] h-[900px]'
          ></iframe> */}
          </div>

          <div className='hidden md:flex ml-3 h-full flex-col justify-center'>
            <button
              className='cursor-pointer'
              disabled={pageNumber >= numPages}
              onClick={() => nextPage()}
            >
              <IoIosArrowForward size={25} />
            </button>
          </div>

          <div className='md:hidden w-full mt-3 flex flex-col items-center'>
            <div className=' flex gap-10 items-center justify-center py-4'>
              <button
                className=''
                disabled={pageNumber <= 0}
                onClick={() => setPageNumber((curr) => curr - 1)}
              >
                <IoIosArrowBack size={18} />
              </button>
              <div className='text-xs'>página {pageNumber + 1} de 32</div>
              <button
                className=''
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((curr) => curr + 1)}
              >
                <IoIosArrowForward size={18} />
              </button>
            </div>
            <div className='mt-6 flex flex-col items-center md:text-xs leading-3 text-[10px]'>
              <div className='font-stanleybold text-[11px] md:text-[13px]'>
                Edição Extraordinária do Jornal Pessoal
              </div>
              <div className='font-stanleybold text-[11px] md:text-[13px]'>
                A Agenda Amazônica de Lúcio Flávio Pinto
              </div>
              <div className=''>Impressão offset</div>
              <div className=''>27x20cm, 32 páginas</div>
              <div className=''>Edição de 5000 cópias</div>
              <div className=''>2022</div>
            </div>
            <div className='mt-8 flex justify-center w-full pr-1'>
              <a
                href='/assets/jornal-pessoal-edext.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='px-4 py-2 bg-black/20 text-xs'>BAIXAR PDF</div>
              </a>
            </div>
          </div>
        </div>

        <div className='hidden md:flex flex-col mt-6 justify-center w-full pr-1'>
          <div className='mt-6 flex flex-col items-center md:text-xs leading-3 text-[10px]'>
            <div className='font-stanleybold text-[11px] md:text-[13px]'>
              Edição Extraordinária do Jornal Pessoal
            </div>
            <div className='font-stanleybold text-[11px] md:text-[13px]'>
              A Agenda Amazônica de Lúcio Flávio Pinto
            </div>
            <div className=''>Impressão offset</div>
            <div className=''>27x20cm, 32 páginas</div>
            <div className=''>Edição de 5000 cópias</div>
            <div className=''>2022</div>
          </div>
          <div className='flex justify-center mt-8'>
            <a
              href='/assets/jornal-pessoal-edext.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='px-4 py-2 bg-black/20 text-xs'>BAIXAR PDF</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const PrevButton = ({ gotoPrevious }) => {
  return (
    <div
      className='absolute top-[50%] -translate-y-[50%] left-0 p-4 z-[10] cursor-pointer hidden sm:block'
      onClick={gotoPrevious}
    >
      <IoIosArrowBack size={40} color={'#d1d1d1'} />
    </div>
  );
};
const NextButton = ({ gotoNext, setIsOpen }) => {
  return (
    <>
      <div
        className='absolute top-[50%] -translate-y-[50%] right-0 p-4 z-[10] cursor-pointer hidden sm:block select-none'
        onClick={gotoNext}
      >
        <IoIosArrowForward size={40} color={'#d1d1d1'} />
      </div>
      <div
        className='top-4 right-4 absolute text-[#d1d1d1] sm:hidden'
        onClick={() => setIsOpen(false)}
      >
        x
      </div>
    </>
  );
};
const Overlay = ({ setIsOpen, isOpen }) => {
  return (
    <div
      className='fixed right-0 top-0 bg-black/80 w-full h-screen z-[-100]'
      //   style={{ display: isOpen ? 'block' : 'hidden' }}
      onClick={() => setIsOpen(false)}
    ></div>
  );
};

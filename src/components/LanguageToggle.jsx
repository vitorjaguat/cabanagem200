import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  // console.log(router.query);

  // const handleLanguageChange = (locale) => {
  //   i18n.changeLanguage(locale); //changing the language
  //   router.push(
  //     {
  //       pathname: router.pathname,
  //       query: router.query,
  //     },
  //     router.asPath,
  //     { locale, scroll: false }
  //   ); //redirect to the new language's path, eg, '/pt/#home'
  // };

  //router.push(url, as, options)
  //url: the url to navigate to
  //as: optional decorator (#home, eg)
  //options: object of options:
  //scroll: Optional boolean, controls scrolling to the top of the page after navigation. Defaults to true
  //shallow: Update the path of the current page without rerunning getStaticProps, getServerSideProps or getInitialProps. Defaults to false
  //locale - Optional string, indicates locale of the new page

  return (
    <div className='flex justify-center items-center font-stanleybold text-[10px] md:text-xs tracking-wide'>
      <Link
        href={{
          pathname: router.pathname,
          query: router.query.jieqi
            ? {
                jieqi: router.query.jieqi,
              }
            : {},
        }}
        locale='pt'
        scroll={false}
      >
        <div
          className='mr-3 cursor-pointer px-1 hover:border-b hover:border-[#a1a1a1]'
          // onClick={() => handleLanguageChange('pt')}
        >
          PT
        </div>
      </Link>

      {/* <Link
        href={{
          pathname: router.pathname,
          query: router.query.jieqi
            ? {
                jieqi: router.query.jieqi,
              }
            : {},
        }}
        locale='zh'
        scroll={false}
      >
        <div
          className='mr-1 text-xs cursor-pointer px-1 hover:border-b'
          // onClick={() => handleLanguageChange('zh')}
        >
          中
        </div>
      </Link> */}

      <Link
        href={{
          pathname: router.pathname,
          query: router.query.jieqi
            ? {
                jieqi: router.query.jieqi,
              }
            : {},
        }}
        locale='en'
        scroll={false}
      >
        <div
          className='cursor-pointer px-1 hover:border-b hover:border-[#a1a1a1]'
          // onClick={() => handleLanguageChange('en')}
        >
          EN
        </div>
      </Link>
    </div>
  );
};

export default LanguageToggle;

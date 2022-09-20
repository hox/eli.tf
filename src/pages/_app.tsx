import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return (
    <>
      <DefaultSeo
        title='Elias Hernandez'
        description='Elias Hernandez • Software Engineer'
        openGraph={{
          url: 'https://eli.tf',
          title: 'Elias Hernandez',
          description: 'Elias Hernandez • Software Engineer',
          site_name: 'Elias Hernandez',
        }}
        twitter={{
          handle: '@ShutUpElii',
          site: 'Elias Hernandez',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps}></Component>
    </>
  );
}

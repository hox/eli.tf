import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { tw } from 'twind';
import { css } from 'twind/css';

export const globals = css({
  ':global': {
    body: {
      fontFamily: ['Urbanist'],
    },
    html: {
      backgroundImage: `url('https://cdn.eli.tf/website-background.webp')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    },
  },
});

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Elias Hernandez</title>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='url' content='https://eli.tf' />
        <meta name='description' content='Elias Hernandez' />
        <meta name='author' content='Elias Hernandez' />
        <meta name='copyright' content='Elias Hernandez' />
        <meta name='twitter:site' content='@hoxeli' />
        <meta name='twitter:creator' content='@hoxeli' />

        <link rel='dns-prefetch' href='https://go.eli.tf' />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />

        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div class={tw`m-0 p-0 h-full w-full`}>
        <Component />
      </div>
    </>
  );
}

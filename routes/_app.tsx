import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { apply, tw } from 'twind';
import { css } from 'twind/css';

const globals = css({
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
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div class={tw`m-0 p-0 h-full w-full ${globals}`}>
        <Component />
      </div>
    </>
  );
}

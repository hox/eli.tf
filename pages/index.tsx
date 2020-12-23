import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Elias Hernandez</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <video autoPlay muted loop id='background-video'>
        <source src='/earth.mp4' type='video/mp4'></source>
      </video>

      <main>
        <div>
          <h1>Elias Hernandez</h1>
          <span id='bio'>
            Astro-photographer &bull; Backend Developer &bull; Flordia man 🌴
          </span>
          <hr></hr>
          <div className='buttons'>
            <a className='button' href='/twitter'>
              Twitter
            </a>
            <a className='button' href='/github'>
              GitHub
            </a>
            <a className='button' href='/discord'>
              Discord
            </a>
            <a className='button' href='/twitch'>
              Twitch
            </a>
            <a className='button' href='/snapchat'>
              Snapchat
            </a>
            <!--
            <a className='button' href='/youtube'>
              YouTube
            </a>
            -->
          </div>
        </div>
      </main>

      <footer>
        <span>Background &copy; NASA &mdash;</span>
        <a href='https://github.com/hox/eli.tf'>Source Code</a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #eeeeee;
        }

        #background-video {
          position: fixed;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: -100;
          transform: translate(-50%, -50%);
        }

        .button {
          padding: 7px 10px;
          margin: 0 5px;
        }

        .button:hover {
          background-color: rgba(0, 0, 0, 0.5);
          transition-duration: 0.1s;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          overflow: hidden;
        }

        main h1 {
          margin: 5px;
        }

        main #bio {
          margin: 0 15px;
        }

        main hr {
          margin: 15px;
        }

        footer {
          width: 100%;
          margin-bottom: 10px;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer *::before {
          content: ' ';
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

export default () => (
  <div class='flex flex-col h-screen justify-between text-gray-100'>
    <div class='flex sm:justify-around justify-center items-center h-full sm:flex-row flex-col'>
      <div class='my-10 sm:my-0 text-center sm:text-left'>
        <span class='block sm:text-5xl text-4xl font-bold'>
          Elias Hernandez
        </span>
        <span class='block sm:text-2xl text-2xl font-semibold'>
          Software Engineer
        </span>
      </div>
      <div class='flex'>
        {[
          ['twitter', SiTwitter],
          ['github', SiGithub],
          ['instagram', SiInstagram],
        ].map(([name, Component]) => (
          <div class='mx-3 hover:cursor-pointer hover:text-gray-300 duration-100'>
            <a href={'https://go.eli.tf/' + name}>
              <Component class='w-[40px] h-[35px] stroke-0' />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

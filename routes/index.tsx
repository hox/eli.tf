import { tw } from 'twind/css';
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';
import { globals } from './_app.tsx';

const links = [
  {
    href: 'https://twitter.com/hoxeli',
    Icon: SiTwitter,
  },
  {
    href: 'https://github.com/hox',
    Icon: SiGithub,
  },
  {
    href: 'https://instagram.com/eli.tsx',
    Icon: SiInstagram,
  },
];

export default () => (
  <div
    class={tw`flex flex-col justify-between text-gray-100 h-screen w-full ${globals}`}
  >
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
        {links.map(({ href, Icon }) => (
          <div class='mx-3 hover:cursor-pointer hover:text-gray-300 duration-100'>
            <a href={href}>
              <Icon alt={href} class='w-[40px] h-[35px] stroke-0' />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

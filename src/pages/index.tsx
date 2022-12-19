import { Github, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between text-slate-100'>
      <div className='flex sm:justify-around justify-center items-center h-full sm:flex-row flex-col'>
        <div className='my-10 sm:my-0 text-center sm:text-left'>
          <span className='block sm:text-5xl text-4xl font-bold'>
            Elias Hernandez
          </span>
          <span className='block sm:text-2xl text-2xl font-semibold'>
            Software Engineer
          </span>
        </div>
        <div className='flex'>
          {[
            ['twitter', Twitter],
            ['github', Github],
            ['instagram', Instagram],
          ].map(([name, Component], idx) => (
            <div
              className='mx-3 hover:cursor-pointer hover:text-slate-300 duration-100'
              key={idx}
            >
              <Link href={'https://go.eli.tf/' + name}>
                <Component height={35} width={35} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer className='mx-auto my-1 font-semibold'>
        <span>made on earth by a human</span>
      </footer>
    </div>
  );
}

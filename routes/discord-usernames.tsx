// /** @jsx h */
// import { h } from 'preact';
import { useState } from 'preact/hooks';
import 'preact/compat';
import UsernamesModal from '../islands/usernames-modal.tsx';

export default () => (
  <div class='bg-gray-900 h-screen w-screen flex flex-col space-y-4 items-center justify-center'>
    <UsernamesModal></UsernamesModal>
    <div class='text-gray-500 text-center w-1/4'>
      <p>
        Disclaimer: This site is not affiliated with Discord in any way, this is
        just an estimate based on an assumption and therefor should not be taken
        as factual.
      </p>
      <p>
        Please feel free to make an update on{' '}
        <a
          class='text-gray-400 hover:text-underline hover:text-gray-300'
          href='https://github.com/hox/eli.tf/'
        >
          the repository
        </a>{' '}
        if you find any new information!
      </p>
    </div>
  </div>
);

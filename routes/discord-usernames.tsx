// /** @jsx h */
// import { h } from 'preact';
import { useState } from 'preact/hooks';
import 'preact/compat';
import UsernamesModal from '../islands/usernames-modal.tsx';

export default () => (
  <div class='bg-gray-900 h-screen w-screen flex items-center justify-center'>
    <UsernamesModal></UsernamesModal>
  </div>
);

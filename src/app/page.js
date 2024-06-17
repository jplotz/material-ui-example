'use client'; // needed to render client-side components

// set font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SignIn from './SignIn.js';

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
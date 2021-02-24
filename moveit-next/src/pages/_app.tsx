import { useState } from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </Challenges.Providerlue>
  );
}

export default MyApp;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Fontsource imports
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/400-italic.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';

import { LazyMotion, domAnimation } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
    </LazyMotion>
  </StrictMode>,
)

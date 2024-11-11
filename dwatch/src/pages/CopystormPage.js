import React from 'react';
import CopystormHero from '../components/Copystorm/Hero';
import WhatIsCopystorm from '../components/Copystorm/WhatIs';
import Features from '../components/Copystorm/Features';
import ContactForm from '../components/Copystorm/ContactForm';
import FAQ from '../components/Copystorm/FAQ';

const CopystormPage = () => {
  return (
    <main>
      <CopystormHero />
      <WhatIsCopystorm />
      <Features />
      <ContactForm />
    </main>
  );
};

export default CopystormPage;
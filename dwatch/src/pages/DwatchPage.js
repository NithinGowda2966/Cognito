import React from 'react';
import Hero from '../components/Dwatch/Hero';
import CardWheel from '../components/Dwatch/CardWheel';
import Dwatch_features from '../components/Dwatch/Dwatch_features';
import Dwatch_contactus from '../components/Dwatch/Dwatch_contactus';

const DwatchPage = () => {
  return (
    <main>
      <Hero />
      <CardWheel />
      <Dwatch_features />
      <Dwatch_contactus />
    </main>
  );
};

export default DwatchPage;
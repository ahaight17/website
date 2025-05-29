import React, { FunctionComponent } from 'react';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/aesthetic/Footer';
import { Header } from '../components/aesthetic/Header';

export const Home: FunctionComponent = () => {
  return(
    <div className="color-default relative-position flex-container-column content-container">
      <Header />
      <Carousel />
      <Footer />
    </div>
  )
}
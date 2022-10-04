import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Newsletter } from './components';
import './App.css';

const App = () => (
  <div className='app'>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Chef />
    <AboutUs />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Newsletter/>
    <Footer />
  </div>
);

export default App;

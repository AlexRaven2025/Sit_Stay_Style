import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home }  from './components/home';
import About from './components/about';
import Services from './components/services';
import BookNow from './components/bookNow';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <About />} />
      <Route path='/services' element={ <Services />} />
      <Route path='/booknow' element={ <BookNow />} />
    </Routes>
    </>
  );
}

export default App;

import { Suspense, lazy, useState } from 'react';
import Navebar from './components/navebar/navebar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/home/home.jsx'));
const About = lazy(() => import('./components/about/about.jsx'));
const Recipiedetails = lazy(() => import('./components/recipiedetails/recipiedetails.jsx'));


function LoadingFallback() {
  return (
    <div className="suspense-fallback-bg">
      <div className="suspense-fallback-spinner"></div>
      <div className="suspense-fallback-text">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipie/:id' element={
            <div className='background-details'>
              <Recipiedetails />
            </div>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App

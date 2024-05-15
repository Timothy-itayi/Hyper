import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './pages/drivers';

function App() {
  return (

      <>
        {/* Navigation bar */}
        <nav className="bg-gray-100 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a className="text-xl font-bold" href="#">Fantasy F1 League</a>
            <button className="block lg:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbarNav">
              <ul className="flex flex-col lg:flex-row lg:ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item ml-0 lg:ml-4">
                  <a className="nav-link" href="/drivers">Drivers</a>
                </li>
                <li className="nav-item ml-0 lg:ml-4">
                  <a className="nav-link" href="/teams">Teams</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Main content */}
        <div className="container mx-auto mt-5">
        <Routes>
            <Route path="/drivers" element={<Drivers drivers={[]} />} />
            {/* Add more routes here */}
            <Route path="/" element={<>
              <h1 className="text-3xl font-bold">Welcome to the Fantasy F1 League!</h1>
              <p className="mt-2">This is the ultimate platform for F1 fans to test their knowledge, strategy, and luck in a thrilling fantasy league.</p>
            </>} />
          </Routes>
        </div>
      </>
   

  );
}

export default App;

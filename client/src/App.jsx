import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/login'
import Signup from './components/Auth/signup'
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import Robofest from './components/Robofest/Robofest';
import Footer from "./components/Footer/Footer"
import About from './components/About/About';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              {/* <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/teams" element={<TeamPage />} /> */}

              <Route path="/" element={<Home />} />
              <Route path="/robofest" element={<Robofest />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

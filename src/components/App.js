import React from 'react';
import './App.css';
import Title from './Title/Title.js';
import POPOSList from './POPOSList/POPOSList.js';
import About from './About/About.js';
import Footer from './Footer/Footer.js';
import POPOSDetails from './POPOSDetails/POPOSDetails.js'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Routes>
          <Route exact path="/" element={<POPOSList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details/:id" element={<POPOSDetails/>}/>
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;

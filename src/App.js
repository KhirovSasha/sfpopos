import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import About from './About';
import Footer from './Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import POPOSDetails from './POPOSDetails'


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

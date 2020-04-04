import React from 'react';
import Map from './components/Map'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
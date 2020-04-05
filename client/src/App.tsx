import React, { useState } from 'react';
import Map from './components/Map'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CovidInfo from './components/CovidInfo';
import { WORLD } from './constants/ValueConstants';
import { changeCountryName } from './utilities/utils';

const App = () => {
  const [worldData, setWorldData] = useState({} as string | string | any);
  const [country, setCountry] = useState(WORLD);

  return (
    <div className="App">
      <NavBar />
      <CovidInfo countryData={worldData[changeCountryName(country)]} countryName={country} />
      <Map country={country} setCountry={setCountry} worldData={worldData} setWorldData={setWorldData}/>
      <Footer />
    </div>
  );
}

export default App;
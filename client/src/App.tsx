import React, { useState } from 'react';
import Map from './components/Map'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CovidInfo from './components/CovidInfo';
import { WORLD } from './constants/ValueConstants';
import { changeCountryName } from './utilities/utils';
import TweetButton from './components/TweetButton';

const App = () => {
  const [worldData, setWorldData] = useState({} as string | string | any);
  const [country, setCountry] = useState(WORLD);
  const [newsArticles, setNewsArticles] = useState([] as Array<Record<string, string>>);

  return (
    <div className="App">
      <NavBar />
      <CovidInfo countryData={worldData[changeCountryName(country)]} countryName={country} />
      <p>Click on a country below to view more information about that country, in terms of data and news.</p>
      <Map country={country} setCountry={setCountry} 
           worldData={worldData} setWorldData={setWorldData}
           newsArticles={newsArticles} setNewsArticles={setNewsArticles}     
      />
      <TweetButton 
        data={worldData[changeCountryName(country)]} 
        newsArticles={newsArticles}
        country={country}
      />
      <Footer />
    </div>
  );
}

export default App;
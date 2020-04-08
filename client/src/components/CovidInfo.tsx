import React from 'react';
import { CovidInfoProps } from '../constants/PropConstants';
import { CountryData, commaSeparators } from '../utilities/utils';

const CovidInfo: React.FC<CovidInfoProps> = (props) => {
    const loadingData = "...loading data";

    const totalCases = props.countryData ? commaSeparators(props.countryData[CountryData.TOTAL_CASES]) : loadingData;
    const totalDeaths = props.countryData ? commaSeparators(props.countryData[CountryData.TOTAL_DEATHS]) : loadingData;
    const totalRecovered = props.countryData ? commaSeparators(props.countryData[CountryData.TOTAL_RECOVERED]) : loadingData;

    const newCases = props.countryData ? commaSeparators(props.countryData[CountryData.NEW_CASES]) : loadingData;
    const newDeaths = props.countryData ? commaSeparators(props.countryData[CountryData.NEW_DEATHS]) : loadingData;
    const totalPerMillion = props.countryData ? commaSeparators(props.countryData[CountryData.TOTAL_PER_MIL]) : loadingData;

    return (
        <div className="covid-info-section">
            <h1 className="countryName">{props.countryName}</h1>
            <div className="data-section">
                <h2>Total Cases: <br/><span className="numValue" style={{ color: '#FF0000' }}>{totalCases}</span></h2>
                <h2>Total Deaths: <br /><span className="numValue" style={{ color: '#FF5500' }}>{totalDeaths}</span></h2>    
                <h2>Total Recovered: <br /><span className="numValue" style={{ color: '#FF0055' }}>{totalRecovered}</span></h2>   
            </div>
            <div className="data-section">
                <h2>New Cases: <br/><span className="numValue" style={{ color: '#FF0000' }}>{newCases}</span></h2>
                <h2>Total Per Million: <br/><span className="numValue" style={{ color: '#FF0000' }}>{totalPerMillion}</span></h2>
                <h2>New Deaths: <br /><span className="numValue" style={{ color: '#FF0055' }}>{newDeaths}</span></h2>   
            </div>
        </div>
    )
};

export default CovidInfo;
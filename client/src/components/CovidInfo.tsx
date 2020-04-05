import React from 'react';
import { CovidInfoProps } from '../constants/PropConstants';
import { CountryData, commaSeparators } from '../utilities/utils';

const CovidInfo: React.FC<CovidInfoProps> = (props) => {
    const loadingData = "...loading data";
    const totalCases = props.countryData ? commaSeparators(props.countryData[CountryData.TOTAL_CASES]) : loadingData;
    const newCases = props.countryData ? commaSeparators(props.countryData[CountryData.NEW_CASES]) : loadingData;
    const newDeaths = props.countryData ? commaSeparators(props.countryData[CountryData.NEW_DEATHS]) : loadingData;

    return (
        <div className="covid-info-section">
            <h1 className="countryName">{props.countryName}</h1>
            <div className="data-section">
                <h2>Total Cases: <br/><span className="numValue" style={{ color: '#FF0000' }}>{totalCases}</span></h2>
                <h2>New Cases: <br /><span className="numValue" style={{ color: '#FF5500' }}>{newCases}</span></h2>    
                <h2>New Deaths: <br /><span className="numValue" style={{ color: '#FF0055' }}>{newDeaths}</span></h2>   
            </div>
        </div>
    )
};

export default CovidInfo;
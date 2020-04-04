import React from 'react';
import { DataCardProps } from '../constants/PropConstants';
import { DataCardStyle } from '../constants/StyleConstants';

const DataCard: React.FunctionComponent<DataCardProps> = (props) => {
    return (
        <div className="card" style={{...DataCardStyle, ...props.style}}>
            <h2>{props.countryName}</h2>
            <p>{props.countryData}</p>
        </div>
    )
};

export default DataCard;
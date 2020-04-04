import React from 'react';
import { DataCardProps } from '../constants/PropConstants';
import { DataCardStyle } from '../constants/StyleConstants';

const DataCard: React.FunctionComponent<DataCardProps> = (props) => {
    return (
        <div className="card" style={{...DataCardStyle, ...props.style}}>
            <h1>Card</h1>
        </div>
    )
};

export default DataCard;
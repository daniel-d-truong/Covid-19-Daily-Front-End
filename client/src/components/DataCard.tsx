import React, { useEffect, useState, memo } from 'react';
import { DataCardProps } from '../constants/PropConstants';
import { DataCardStyle } from '../constants/StyleConstants';
import { getNewsArticles } from '../utilities/requests';
import { changeCountryName } from '../utilities/utils';

let previousCountry: string = "";

const DataCard: React.FunctionComponent<DataCardProps> = (props) => {

    const [newsUrls, setNewsUrls] = useState([] as Array<string>);

    useEffect(() => {
        if (previousCountry !== props.countryName) {
            getNewsArticles(changeCountryName(props.countryName)).then((fetchedData) => {
                // console.log(fetchedData);
                if (fetchedData["urls"]) {
                    setNewsUrls(fetchedData["urls"]);
                    console.log(newsUrls);
                }
                
            });
        }
        previousCountry = props.countryName;
    });

    return (
        <div className="card" style={{...DataCardStyle, ...props.style}}>
            <h2>{props.countryName}</h2>
            <p>{}</p>
            {
                newsUrls.map((url) => 
                    <p>{url}</p>
                )
            }
        </div>
    )
};

export default DataCard;
import React, { useEffect, useState } from 'react';
import { DataCardProps } from '../constants/PropConstants';
import { DataCardStyle } from '../constants/StyleConstants';
import { getNewsArticles } from '../utilities/requests';
import { changeCountryName, ArticleData } from '../utilities/utils';
import ItemsCarousel from 'react-items-carousel';
import NewsCard from './NewsCard';

let previousCountry: string = "";

const DataCard: React.FunctionComponent<DataCardProps> = (props) => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    useEffect(() => {
        if (previousCountry !== props.countryName) {
            getNewsArticles(changeCountryName(props.countryName)).then((fetchedData) => {
                // console.log(fetchedData);
                if (fetchedData["articles"]) {
                    props.setNewsArticles(fetchedData["articles"]);
                }
                
            });
        }
        previousCountry = props.countryName;
    });

    return (
        <div className="card" style={{...DataCardStyle, ...props.style}}>
            <h2>{props.countryName}</h2>
            <p>{}</p>
            <div className="card-content">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={10}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron={false}
                    chevronWidth={chevronWidth}>
                    {
                        props.newsArticles.map((article) => 
                            <NewsCard title={article[ArticleData.TITLE]} desc={article[ArticleData.DESC]} href={article[ArticleData.URL]} pic={article[ArticleData.URL_TO_IMAGE]} />
                        )
                    }
                </ItemsCarousel>
            </div>
        </div>
    )
};

export default DataCard;
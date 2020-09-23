import React from 'react';
import { NewsCardProps } from '../constants/PropConstants';
import { goToNewPage } from '../utilities/utils';

const NewsCard: React.FC<NewsCardProps> = (props) => {
    return (
        <div className="news-card" onClick={() => { goToNewPage(props.href) }}>
            <img src={props.pic} alt="news pic"></img>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
};

export default NewsCard;
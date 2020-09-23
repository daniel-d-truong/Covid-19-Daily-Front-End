import React, { useState } from 'react';
import { TweetButtonProps } from '../constants/PropConstants';

import twitterIcon from '../icons/twitter.png';
import TextBox from './TextBox';
import { goToPageWithParams, createTweet } from '../utilities/utils';
import { TWITTER_LINK } from '../constants/ValueConstants';

const TweetButton: React.FC<TweetButtonProps> = (props) => {
    const scaleFactor = "6%";

    const [formattedString, setFormattedString] = useState("");

    if (formattedString === "") {
        const text = createTweet(props.country, props.data, props.newsArticles);
        if (text !== "") {
            setFormattedString(createTweet(props.country, props.data, props.newsArticles));
        }
    }

    const newTweet = createTweet(props.country, props.data, props.newsArticles);
    if (newTweet !== formattedString) {
        setFormattedString(newTweet);
    }

    let textString = formattedString;

    const changeString = (value: string) => {
      textString = value;
    };

    return (
        <div className="tweet-section">
            <div className="button" 
                 onClick={() => { goToPageWithParams(TWITTER_LINK,
                    {
                        status: textString
                    }
                 )} }>
                <p>Share the data on Twitter! <img src={twitterIcon} style={{
                    width: scaleFactor, 
                    height: scaleFactor,
                    margin: "0 auto"
                }} alt="twitter icon"/></p>            
            </div>
            <p>*We will not make a tweet without your permission.*</p>
            <TextBox dynamicData={{}} formattedString={textString} 
                     setFormattedString={changeString}/>
        </div>

    )
};

export default TweetButton;
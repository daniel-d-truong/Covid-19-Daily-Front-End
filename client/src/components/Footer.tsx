import React, { memo } from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p>Created by Daniel Truong. Data sourced by <a href="https://www.worldometers.info/coronavirus/">worldometers</a>. Code available on Github (<a href="https://github.com/daniel-d-truong/Covid-19-Daily-Front-End">Front-End</a> and <a href="https://github.com/daniel-d-truong/Covid-19-Daily">Back-End</a>).</p>
        </div>
    )
};

export default memo(Footer);
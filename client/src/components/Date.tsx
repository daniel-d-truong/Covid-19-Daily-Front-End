import React, { useState, useEffect } from 'react';

const DateComponent = () => {
    const [date, setDate] = useState( new Date() );

    const getTimeDayResets = () => {
        const timeOffset = date.getTimezoneOffset();
        const hour = 12 - timeOffset/60;
        return `${hour}:00 ${hour < 12 ? 'PM' : 'AM'}`;
    };

    useEffect(() => {
        setInterval(
            () => setDate( new Date() ),
            1000
        );
    });

    return (
        <div className="date-component">
            <p className="time">{date.toLocaleTimeString()} @ {date.toLocaleDateString()}</p>
            <p>Day's stats gets reset at <b>{getTimeDayResets()}</b> at your local time zone.</p>
        </div>
    )
};

export default DateComponent;
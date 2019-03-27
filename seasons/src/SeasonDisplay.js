import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach", 
        iconName: "sun"
    },
    winter: {
        text: "It's so cold!", 
        iconName: "snowflake"        
    }
};


const getSeason = (lat,month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer': 'winter';
    } 

    else {
        return lat < 0 ? 'summer': 'winter';
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    console.log(season);

    return (
        <div>
            <i className= {`massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className= {`massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
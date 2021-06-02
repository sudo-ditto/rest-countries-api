import React from 'react';

const Border = (props) => {
    console.log('work');
    return (
        <div className="border">
            {props.country}
        </div>
    )
}

export default Border;

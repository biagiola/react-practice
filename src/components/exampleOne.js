import React from 'react';
import values from './values';

function hola () {
    
    const methodOne = () => {
        let a = 5;
        return a;
    }
    return(
    <div>
        <div>{values}</div>
        <div>{methodOne()}</div>
    </div>
    )
}

export default hola;
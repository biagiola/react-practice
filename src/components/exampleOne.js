import React from 'react';
import values from './values';

function ClassOne () {
    
    let pi = 3.14;

    const methodOne = () => {
        let a = 5;
        return a;
    }
    function methodTwo() {
        let b = 10;
        return b;
    }
    return(
    <div className="box">
        <div>{ pi }</div>
        <div>{ values }</div>
        <div>{ methodOne() }</div>
        <div>{ methodTwo() }</div>
    </div>
    )
}

export default ClassOne;

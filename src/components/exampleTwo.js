import React, { Component } from 'react';

class Two extends Component {

    methodOne = () => {
        let a = 'Component two';
        return a;
    }
    
    render() {

        function methodTwo() {
            let b = 'methodTwo';
            return b;
        }

        let a = 5;

        let b = 'message'

        return(
            <div className="box">
                <div>{ this.methodOne() }</div>
                <div>{ methodTwo() }</div>
                <div>{ a }</div>
                <div>{ b }</div>
            </div>
        
        )
    }
}

export default Two;

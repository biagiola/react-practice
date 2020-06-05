import React, { Component } from 'react';

class Four extends Component {
    constructor(props){
        super(props);
        this.method1 = this.method1.bind(this);
    } 
    
    method1() {
        console.log('this1', this);
    }

    method2 = () => {
        console.log('this2', this);
    }

    render() {

        function method3() {
            console.log('this3', this);
        }

        const method4 = () => {
            console.log('this4', this);
        }

        return (
            <div className='box'>
                <div>Component 4</div>
                <div onClick={ this.method1 }>this.method1</div>
                <div onClick={ this.method2 }>this.method2</div>
                <div onClick={ method3 }>this.method3</div>
                <div onClick={ () => method4() }>this.method4</div>
            </div>
        )
    }
}

export default Four;

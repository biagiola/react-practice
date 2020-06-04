import React, { Component } from 'react'


class Three extends Component {

    

    render(){
        const a  = 5;
        const b = 10;

        function method1(a, b) {
            return a + b;
        }
        /*  same as above
        const sum = (a, b) => {
            return a + b;
        }*/

        //this work
        function method2() {
            alert('hola');
        }

        const method3 = () => {
            alert('hola');
        }

        return (
            <div className="box">
                <div>{a}</div>
                <div>method1 - { method1(a,b) }</div>
                <div onClick={() => method2()}>click me - method2()</div>
                <div onClick={() => method3()}>click me - method3()</div>
            </div>
        )
    }
    
}


export default Three;
import React, { Component } from 'react'

export default class Confitionals extends Component {
        
    state = {
        segment: true
    }

    //this.method1 = this.method1.bind(this);

    method1 = () => {
        if (this.state.segment) {
            alert('testing')
        };
    }

    render() {

        const showTag = this.state.segment ? '<div>true</div>' : '<div>false</>'

        return (
            <div className='box'>
                <div>Component 6</div>
                <div>{ showTag }</div>
                <div onClick={ this.method1 }>click me</div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class Form extends Component {

    onSubmitSend(e){
        e.preventDefault();
        alert(e.target.value);
        console.log(e.target);
    }
    render() {
        return (
            <div className='box'>
                <div>Component 7</div>
                <form onSubmit={ this.onSubmitSend }>
                    <label>Text One</label>
                    <input
                        type='text'
                        placeholder='enter text here...'
                        value="ff"
                    />
                </form>
            </div>
        )
    }
    
}

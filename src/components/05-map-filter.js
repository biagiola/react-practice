import React, { Component } from 'react'

class State extends Component {
    state = {
        lista: [5,5,4,8,6,2]
    }
    render() {
        return (
            <div className='box'>
                <div>Component 5</div>
                <span> this.state.lista = </span>
                <span>{ this.state.lista }</span>
                <br/>
                
                <span>this.state.lista.map = </span>
                {
                    this.state.lista.map( e => {
                        return <span key={Math.random()}>{ e }</span>
                    })
                }<br/>

                <span>this.state.lista.filter = </span>
                <span>{this.state.lista.filter( e => e > 5)}</span>
                <br/>

                <span>this.state.lista.filter.map = </span>
                <span>{
                    this.state.lista.filter( e => e > 5).map( e => {
                    return <span key={Math.random()}>{ e }</span>
                    })
                }</span>
            </div>
        )
    }
}

export default State;
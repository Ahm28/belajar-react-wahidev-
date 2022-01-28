import React, { Component } from 'react';

export default class Stateprops extends Component {
    constructor(props){
        super(props)
        this.state = {
            makanan : 'bakso'
        }
    }

  render() {
    return (
        <div>
            <h2> {this.state.makanan} </h2>
            <button onClick={() => this.setState({makanan : 'soto'})}>Ganti Makanan</button>
        </div>
    );
  }
}

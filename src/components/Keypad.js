import React, { Component } from 'react'

export default class Kepad extends Component {

  keyEvent = (event) => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input type='password' onKeyUp={this.keyEvent}></input>
    )
  }
}
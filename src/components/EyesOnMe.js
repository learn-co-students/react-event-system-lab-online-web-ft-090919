import React, {Component} from 'react';

export default class EyesOnMe extends Component{

  handleFocusIn = () => console.log('Good!')

  handleFocusOut = () => console.log('Hey! Eyes on me!')

  render(){
    return (
      <button
        onFocus={this.handleFocusIn}
        onBlur={this.handleFocusOut}>
        Submit
      </button>
    )
  }
}
import React, { Component } from 'react';

class EyesOnMe extends Component {
    render(){
        return (
            <div>
                <button onFocus={this.onFocus} onBlur={this.onBlur}>
                </button>
            </div>
        )
    }

    onFocus = () => console.log('Good!');
    onBlur = () => console.log('Hey! Eyes on me!');
}

export default EyesOnMe;
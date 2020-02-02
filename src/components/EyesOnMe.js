// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    handleFocus(){
        console.log('Good!');
        
    }

    handleBlur(){
        console.log('Hey! Eyes on me!');
        
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Look at Me!</button>
            </div>
        )
    }
}

export default EyesOnMe

import React, { Component } from 'react';

class KeyPad extends Component {
    
    handleKeyUp = () => console.log('Entering password...');
    
    render(){
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.handleKeyUp}>
                </input>
            </div>
        )
    }
}


export default KeyPad; 

// Code Keypad Component Here

import React, { Component} from 'react'

class Keypad extends Component {

    logConsole = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                 <input type="password" onKeyUp={this.logConsole}/>
            </div>
        )
    }

}






export default Keypad


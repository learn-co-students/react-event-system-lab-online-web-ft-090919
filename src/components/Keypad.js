import React from 'react'

class Keypad extends React.Component {

    handleKey = () => console.log('Entering password...')

    render() {
        return(
            <div>
                <input type="password"
                onKeyUp={this.handleKey}
                />
            </div>
        )
    }
}

export default Keypad

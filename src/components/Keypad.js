// Code Keypad Component Here
 import React from 'react';

 class KeyPad extends React.Component {
     handleInputPassword = () => console.log('Entering password...')

     render() {
         return (
             <div>
                 <input 
                 type="password" 
                 onKeyUp={this.handleInputPassword}
                 />
             </div>
         )
     }
 }
 export default KeyPad;
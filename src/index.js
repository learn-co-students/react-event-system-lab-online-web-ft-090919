import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    This is the Top-Teir application, the main parent.
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);

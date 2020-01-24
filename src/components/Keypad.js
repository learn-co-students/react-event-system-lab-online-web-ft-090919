// Code Keypad Component Here
import { Component } from "react";

export default class Keypad extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input type="password" onKeyUp={console.log("entering password...")} />
    );
  }
}

import { Component } from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {
  constructor() {
    super();
  }

  render() {
    <button
      onFocus={console.log("Good!")}
      onBlur={console.log("Hey! Eyes on me!")}
    />;
  }
}

// What is class components?
// Class components use es6 classes and have additional feature
// like state and life cycle methods. 

import { Component } from "react";

class Counter extends Component {
  // State initialization
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method: Called after the component is mounted
  //In React, componentDidMount is a lifecycle method that is called after a component is rendered to the DOM for the first time. 
  //It is part of the class component lifecycle and is used to perform tasks that require the component to be present in the DOM, such as:
  componentDidMount() {
    console.log("Component mounted!");
  }

  // Event handler to update the state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method to return JSX
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

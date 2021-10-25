import React, { Component } from "react";

class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default ClassComponent;
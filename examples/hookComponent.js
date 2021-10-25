import React, {Component} from "react";

// higher order component
function ComponentWrapper(WrapperComponent) {
  
  // the logic of the component

  return class extends Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
}
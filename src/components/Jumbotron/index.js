import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid jumbotron-img">
        <div className="container text-center">
          <h1 className="display-3 jumbo-text">Clicky Game!</h1>
          <p className="lead jumbo-text">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;

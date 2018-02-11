import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
  };

  render() {
    return (
    <nav className="navbar fixed-top navbar-light bg-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">Clicky Game</span>
				<span className="navbar-brand">{this.props.message}</span>
				<span className="navbar-brand">
					Score: <span>{this.props.score}</span> | Top Score: <span>{this.props.topScore}</span>
				</span>
			</div>
    </nav>
    );
  }
}

export default Navbar;

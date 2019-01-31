import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movies extends Component {
  render() {
    return (
      <div className="hero">
        <div className="intro">
          <h1 className="title">Filmster</h1>
          <p>Welcome to our online movie rental service</p>
          <Link className="btn btn-primary" to="/movies" role="button">
            Enter
          </Link>
        </div>
      </div>
    );
  }
}

export default Movies;

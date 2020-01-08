import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          ExerciseTracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav - mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Pets
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Add Pet
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/:id" className="nav-link">
                Edit Pet
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
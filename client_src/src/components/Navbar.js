import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Meetups
            </a>
            <a
              data-target="mobile-demo"
              className="button-collapse show-on-large sidenav-trigger"
            >
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" />
                  Meetups
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">
              <i className="fa fa-users" />
              Meetups
            </Link>
          </li>
          <li>
            <Link to="/meetups/add">
              <i className="fa fa-plus" />
              Add Meetup
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-question-circle" />
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

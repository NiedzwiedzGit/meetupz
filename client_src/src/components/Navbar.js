import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo center">
              Meetups
            </a>
            <a
              data-target="mobile-demo"
              class="button-collapse show-on-large sidenav-trigger"
            >
              <i class="fa fa-bars" />
            </a>
            <ul class="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" />
                  Meetups
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
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
        </ul>
      </div>
    );
  }
}

export default Navbar;

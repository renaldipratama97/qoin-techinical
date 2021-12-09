import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

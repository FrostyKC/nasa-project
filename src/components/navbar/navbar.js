import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink className="link" to="/" exact activeClassName="active">
          APOD
        </NavLink>
        <NavLink className="link" to="earthImg" activeClassName="active">
          Satellite Image
        </NavLink>
      </div>
    );
  }
}

export default navbar;

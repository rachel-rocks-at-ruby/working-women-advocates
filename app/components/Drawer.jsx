import React, { Component } from 'react';
import { Link } from 'react-router';
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'

// This is what slides out from the left on the nav
export default (props) => {
  const loggedin = props.auth;
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">WWA</span>
      <nav className="mdl-navigation">
        {loggedin ? <LoggedInNav /> : <LoggedOutNav />}
      </nav>
    </div>
  )
}

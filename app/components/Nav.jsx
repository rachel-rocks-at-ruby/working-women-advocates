import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Working Women Advocates</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/* Navigation. We hide it in small screens. */}
        <nav className="mdl-navigation">
          <Link to="landing" className="mdl-navigation__link">Home</Link>
          <Link to="about" className="mdl-navigation__link">About</Link>
          <Link to="volunteer" className="mdl-navigation__link">Volunteer</Link>
          <Link to="mentor-login" className="mdl-navigation__link">Mentor Login</Link>
          <Link to="working-women-signup" className="mdl-navigation__link">Working Women Signup</Link>
        </nav>
      </div>
    </header>
  )
}

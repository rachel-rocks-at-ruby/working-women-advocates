import React, { Component } from 'react';

export default () => {
  return (
    <main className="mdl-layout__content">
      <div id="volunteer" className="page-content mdl-cell mdl-cell--6-col">
        <h1>Mentor Login</h1>
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="name" />
                <label className="mdl-textfield__label" htmlFor="name">Name</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="password" id="password" />
                <label className="mdl-textfield__label" htmlFor="password">Password</label>
              </div>
              <div className="get-started">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

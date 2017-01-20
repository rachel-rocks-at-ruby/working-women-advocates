import React, { Component } from 'react';

import ContactMethod from './ContactMethod';

export default () => {
  return (
    <main className="mdl-layout__content">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h1>Working Women Signup</h1>
        <div className="card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Read everything!</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>Before filling out this form, please confirm you are not on your company WiFi. Some companies track employee activity on the Internet.</p>
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="name" />
                <label className="mdl-textfield__label" htmlFor="name">Username</label>
              </div>
              <p className="input-tag">We will refer to you by this.</p>

              <h6>What is your preferred method of contact?</h6>
              <ContactMethod />
              {/* do they need to be assigned a fake email account? */}
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="email" />
                <label className="mdl-textfield__label" htmlFor="email">Email</label>
              </div>
              {/* text or call? if call: best time? need to set appointment? */}
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="phone" />
                <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="skype" />
                <label className="mdl-textfield__label" htmlFor="skype">Skype</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="other" />
                <label className="mdl-textfield__label" htmlFor="other">Other</label>
              </div>
              <p className="input-tag">WhatsApp? Viber? Google Hangouts? You tell us.</p>
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

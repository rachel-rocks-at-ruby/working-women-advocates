import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'
import { logout } from '../../redux/reducers/auth'

const Nav = ({ logout, currentUser }) => {
  const loggedin = currentUser
  return (
    <header className={`${loggedin ? '' : 'mdl-layout__header--transparent'} mdl-layout__header`}>
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Working Women Advocates</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/* Navigation. We hide it in small screens. */}
        {loggedin ? <LoggedInNav logout={logout} currentUser={loggedin} /> : <LoggedOutNav />}
      </div>
    </header>
  )
}

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: () => {
      dispatch(logout())
      browserHistory.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
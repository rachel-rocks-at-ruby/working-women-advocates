import React from 'react';
import {connect} from 'react-redux';
import Signup from '../components/Signup';
import {signup} from '../reducers/issues';
import {browserHistory} from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    signup: (username, email) => {
      dispatch(signup(username, email));
      browserHistory.push('/signup-submitted');
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)

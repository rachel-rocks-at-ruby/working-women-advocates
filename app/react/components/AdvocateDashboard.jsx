import React from 'react'
import { connect } from 'react-redux'
import AdvocateIssueItem from './AdvocateIssueItem'

/* ----------------- COMPONENT ------------------ */

const AdvocateDashboard = ({ issues }) => {
  return (
    <main className="mdl-layout__content dashboard">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h2>Advocate Dashboard</h2>
        <h4>Your Cases</h4>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Username</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Submitted</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { issues ? issues.map(issue => <AdvocateIssueItem key={ issue.get('id') } issue={issue} />) : ''}
          </tbody>
          </table>
      </div>
    </main>
  )
}

/* ----------------- CONTAINER ------------------ */

const mapStateToProps = state => {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(AdvocateDashboard)

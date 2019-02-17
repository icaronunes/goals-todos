import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import ConnectedTodos from '../component/Todo'
import ConnectedGoals from '../component/Goals'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

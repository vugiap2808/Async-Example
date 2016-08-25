import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { Component, PropTypes } from 'react'

export default class main extends Component {
  render() {
    const { message } = this.props

    return (
        <h1>{message}</h1>
        <div>
          <input type='text' id='nameInput' placeholder='Name'>
          <input type='text' id='messageinput' placeholder='Message'>
        </div>
    )
  }
}

main.propTypes = {
  message: PropTypes.string.isRequired
}

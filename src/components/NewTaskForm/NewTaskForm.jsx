import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  static defaultProps = {
    onEnterUp: () => {},
  }

  render() {
    const { onEnterUp } = this.props
    return <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={onEnterUp} />
  }
}

NewTaskForm.propTypes = {
  onEnterUp: PropTypes.func,
}

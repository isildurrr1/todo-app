import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  static defaultProps = {
    onEnterUp: () => {},
  }

  render() {
    const { onEnterUp } = this.props
    return (
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault()
          onEnterUp(e.target)
        }}
      >
        <input className="new-todo" placeholder="Task" name="task" autoFocus />
        <input className="new-todo-form__timer" placeholder="Min" name="min" autoFocus type="number" />
        <input className="new-todo-form__timer" placeholder="Sec" name="sec" autoFocus type="number" min={0} max={60} />
        <button type="submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onEnterUp: PropTypes.func,
}

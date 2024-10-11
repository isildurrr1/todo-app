import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TaskFilter/TaskFilter'

export default class Footer extends Component {
  static defaultProps = {
    filterState: 'all',
    tasksState: [],
    onSelect: () => {},
    onClearClick: () => {},
  }

  render() {
    const { filterState, tasksState, onSelect, onClearClick } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{`${
          tasksState.filter((elem) => {
            return elem.state !== 'completed'
          }).length
        } items left`}</span>
        <TaskFilter filterState={filterState} onSelect={onSelect} />
        <button className="clear-completed" onClick={onClearClick}>
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.propTypes = {
  filterState: PropTypes.string,
  tasksState: PropTypes.array,
  onSelect: PropTypes.func,
  onClearClick: PropTypes.func,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

export default class TaskList extends Component {
  static defaultProps = {
    data: [],
    filterState: undefined,
    onEdit: () => {},
    onSaveEdit: () => {},
    onDeleted: () => {},
    onCheck: () => {},
    onStartTimer: () => {},
    onStopTimer: () => {},
  }

  render() {
    const { data, filterState, onEdit, onSaveEdit, onDeleted, onCheck, onStartTimer, onStopTimer } = this.props
    return (
      <ul className="todo-list">
        {data
          .filter((task) => {
            if (filterState === 'active') {
              return task.state === undefined
            }
            if (filterState === 'completed') {
              return task.state === 'completed'
            }
            return task
          })
          .map((task) => {
            return (
              <Task
                {...task}
                key={task.id}
                onEdit={onEdit}
                onSaveEdit={onSaveEdit}
                onDeleted={onDeleted}
                onCheck={onCheck}
                onStart={onStartTimer}
                onStop={onStopTimer}
              />
            )
          })}
      </ul>
    )
  }
}

TaskList.propTypes = {
  data: PropTypes.array,
  filterState: PropTypes.string,
  onEdit: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onDeleted: PropTypes.func,
  onCheck: PropTypes.func,
  onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
}

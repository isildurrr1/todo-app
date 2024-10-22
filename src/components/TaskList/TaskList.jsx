import React from 'react'

import Task from '../Task/Task'

const TaskList = ({ data, filterState, onEdit, onSaveEdit, onDeleted, onCheck, onStartTimer, onStopTimer }) => {
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

export default TaskList

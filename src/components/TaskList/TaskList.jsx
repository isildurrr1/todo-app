import React from 'react'

import Task from '../Task/Task'

const TaskList = ({ data, filterState, onDeleted, onCheck }) => {
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
          return <Task {...task} key={task.id} onDeleted={onDeleted} onCheck={onCheck} />
        })}
    </ul>
  )
}

export default TaskList

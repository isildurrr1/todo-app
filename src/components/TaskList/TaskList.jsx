import React from 'react'

import Task from '../Task/Task'

const TaskList = ({ data, onDeleted }) => {
  return (
    <ul className="todo-list">
      {data.map((task, i) => {
        return <Task {...task} key={i} onDeleted={onDeleted} />
      })}
    </ul>
  )
}

export default TaskList

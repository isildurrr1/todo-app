import React from 'react'

import Task from '../Task/Task'

const TaskList = ({ data, onDeleted, onCheck }) => {
  return (
    <ul className="todo-list">
      {data.map((task) => {
        return <Task {...task} key={task.id} onDeleted={onDeleted} onCheck={onCheck} />
      })}
    </ul>
  )
}

export default TaskList

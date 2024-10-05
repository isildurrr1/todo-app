import React from 'react'
import Task from '../Task/Task'

const TaskList = ({ data }) => {
  return (
    <ul className="todo-list">
      {data.map((element) => {
        return <Task name={element.name} state={element.state} />
      })}
    </ul>
  )
}

export default TaskList;
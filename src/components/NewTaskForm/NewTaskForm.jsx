import React from 'react'

const NewTaskForm = ({ onEnterUp }) => {
  return <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={onEnterUp} />
}

export default NewTaskForm

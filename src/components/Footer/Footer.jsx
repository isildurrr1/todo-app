import React from 'react'

import TaskFilter from '../TaskFilter/TaskFilter'

const Footer = ({ filterState = 'all', tasksState, onSelect, onClearClick }) => {
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

export default Footer

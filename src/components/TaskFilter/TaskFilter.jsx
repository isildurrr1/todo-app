import React from 'react'

const TaskFilter = ({ filterState = 'all', onSelect }) => {
  return (
    <ul className="filters">
      <li>
        <button className={filterState === 'all' ? 'selected' : ''} onClick={() => onSelect('all')}>
          All
        </button>
      </li>
      <li>
        <button className={filterState === 'active' ? 'selected' : ''} onClick={() => onSelect('active')}>
          Active
        </button>
      </li>
      <li>
        <button className={filterState === 'completed' ? 'selected' : ''} onClick={() => onSelect('completed')}>
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TaskFilter

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TaskFilter extends Component {
  static defaultProps = {
    filterState: 'all',
    onSelect: () => {},
  }

  render() {
    const { filterState, onSelect } = this.props
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
}

TaskFilter.propTypes = {
  filterState: PropTypes.string,
  onSelect: PropTypes.func,
}

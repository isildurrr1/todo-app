import { debounce } from 'lodash'
import React, { useEffect } from 'react'
import { formatDistanceStrict } from 'date-fns'

const Task = ({
  name,
  state,
  editing,
  date,
  min,
  sec,
  id,
  timerId,
  onEdit,
  onSaveEdit,
  onDeleted,
  onCheck,
  onStart,
  onStop,
}) => {
  useEffect(() => () => clearInterval(timerId), [timerId])

  return (
    <li className={`${state} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={(e) => onCheck(id, e.target.checked)}
          defaultChecked={state === 'completed'}
        />
        <label>
          <span className="title">{name}</span>
          <span className="description">
            <button className="icon icon-play" onClick={debounce(() => onStart(id), 200)} />
            <button className="icon icon-pause" onClick={() => onStop(id)} />
            {`${!min ? 0 : min}:${!sec ? 0 : sec}`}
          </span>
          <span className="description">{`created ${formatDistanceStrict(new Date(), date)} ago`}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEdit(id, true)}></button>
        <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
      </div>
      {editing ? (
        <input
          type="text"
          className="edit"
          defaultValue={name}
          autoFocus
          onBlur={() => onEdit(id, false)}
          onKeyDown={(e) => onSaveEdit(id, e)}
        />
      ) : (
        <></>
      )}
    </li>
  )
}

export default Task

import { useState } from 'react'
import { Smileys } from '../../common/components/Smileys'
import './statusTextEntry.scss'

const StatusTextEntry = () => {
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [statusInputValue, setStatusInputValue] = useState('')

  const toggleSmileyModalDisplay = event => {
    const left = event.pageX
    setSmileyModalIsOpen(!smileyModalIsOpen)
  }

  return (
    <div className="status-text-entry">
      <div className="input-container">
        <textarea
          value={statusInputValue}
          onChange={event => setStatusInputValue(event.target.value)}
          placeholder="Type a status"
          autoFocus
        >
        </textarea>
      </div>
      <button className="back-button">
        <i className="material-icons">&#xe5c4;</i>
      </button>
      <div className="status-input-options">
        <button
          onClick={(event) => toggleSmileyModalDisplay(event)}
        >
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button className="material-icons">&#xe165;</button>
        <button className="material-icons">&#xe40a;</button>
      </div>
      <button className="send-button">
        <i className="material-icons">&#xe163;</i>
      </button>
      {smileyModalIsOpen &&
        <Smileys
          setStatusInputValue={setStatusInputValue}
          statusInputValue={statusInputValue}
        />
      }
    </div>
  )
}

export default StatusTextEntry

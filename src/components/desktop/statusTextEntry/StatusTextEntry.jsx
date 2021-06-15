import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Smileys } from '../../../common'
import { changeBackgroundColor, changeFontfamily }
  from '../../../common/helpers/statusPage'
import database from '../../../database'
import { statusActions } from '../../data/statusSlice'
import './statusTextEntry.scss'

const StatusTextEntry = () => {
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [statusInputValue, setStatusInputValue] = useState('')
  const [cursorPosition, setCursorPosition] = useState()
  const [backgroundColor, setBackgroundColor] = useState('#005284')
  const [fontFamily, setFontFamily] = useState('Courier New')
  const history = useHistory()
  const dispatch = useDispatch()

  const toggleSmileyModalDisplay = event => {
    setCursorPosition(event.pageX)
    setSmileyModalIsOpen(!smileyModalIsOpen)
  }

  const handleInputEvent = event => {
    setStatusInputValue(event.target.value)
    if (event.target.value.trim().length >= 1) {
      setSendButtonIsActive(true)
    } else {
      setSendButtonIsActive(false)
    }
  }

  const addStatusTextEntry = async () => {
    const id = 'id' + Date.parse(new Date()).toString()
    const storedTime = new Date().getTime()
    const timeOfEntry = new Date().toLocaleString('en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )
    const statusObject = {
      id,
      timeOfEntry,
      storedTime,
      backgroundColor,
      fontFamily,
      statusInputValue
    }

    dispatch(statusActions.addStatus(statusObject))
    history.goBack()
    await database.status.add(statusObject)
  }

  return (
    <div className="desktop-status-text-entry" style={{backgroundColor}}>
      <div>
        <textarea
          value={statusInputValue}
          onChange={event => handleInputEvent(event)}
          placeholder="Type a status"
          maxLength="200"
          style={{fontFamily}}
          autoFocus
        >
        </textarea>
      </div>
      <div className="status-input-options">
        <button onClick={event => toggleSmileyModalDisplay(event)}>
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button
          onClick={() => changeFontfamily(fontFamily, setFontFamily)}
          className="material-icons"
        >
          &#xe165;
        </button>
        <button
          onClick={() => changeBackgroundColor(setBackgroundColor)}
          className="material-icons"
        >
          &#xe40a;
        </button>
      </div>
      <button onClick={history.goBack} className="back-button">
        <i className="material-icons">&#xe5c4;</i>
      </button>
      {sendButtonIsActive && (
        <button onClick={addStatusTextEntry} className="send-button">
          <i className="material-icons">&#xe163;</i>
        </button>
      )}
      {smileyModalIsOpen &&
        <Smileys
          setStatusInputValue={setStatusInputValue}
          statusInputValue={statusInputValue}
          cursorPosition={cursorPosition}
        />
      }
    </div>
  )
}

export default StatusTextEntry

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Smileys } from '../../common'
import { statusActions } from '../statusPage/slice'
import './statusTextEntry.scss'

const StatusTextEntry = () => {
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [statusInputValue, setStatusInputValue] = useState('')
  const [cursorPosition, setCursorPosition] = useState()
  const [backgroundColor, setBackgroundColor] = useState("#005284")
  const [fontFamily, setFontFamily] = useState()
  const history = useHistory()
  const dispatch = useDispatch()

  const toggleSmileyModalDisplay = event => {
    setCursorPosition(event.pageX)
    setSmileyModalIsOpen(!smileyModalIsOpen)
  }

  const changeBackgroundColor = () => {
    let randomColor = '#'
    for (let i = 0; i < 6; i++) {
      randomColor += Math.floor(Math.random() * 10);
    }

    setBackgroundColor(randomColor)
  }

  const changeFontfamily = () => {
    const fontFamilyList = [ 
      "Zapf-Chancery", "Verdana", "Helvetica", "Roboto", "sans-serif",
      "Times New Roman", "Courier", "Arial Narrow", "Candara",
      "Calibri", "Garamond", "cursive", "Monaco",
      "Brush Script MT", "Copperplate", "Courier New"
    ]
    const index = Math.floor(Math.random()*fontFamilyList.length)
    setFontFamily(fontFamilyList[index])
  }

  const handleInputEvent = event => {
    setStatusInputValue(event.target.value)
    if (event.target.value.trim().length >= 1) {
      setSendButtonIsActive(true)
    } else {
      setSendButtonIsActive(false)
    }
  }

  const addStatusTextEntry = () => {
    const id = 'id' + Date.parse(new Date()).toString()
    const timeOfEntry = new Date().toLocaleString('en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )
    const statusObject = {
      id,
      timeOfEntry,
      backgroundColor,
      fontFamily,
      statusInputValue
    }

    dispatch(statusActions.addStatus(statusObject))
    history.push('/')
  }

  return (
    <div className="status-text-entry" style={{backgroundColor}}>
      <div className="input-container">
        <textarea
          value={statusInputValue}
          onChange={event => handleInputEvent(event)}
          placeholder="Type a status"
          style={{fontFamily}}
          autoFocus
        >
        </textarea>
      </div>
      <div className="status-input-options">
        <button onClick={event => toggleSmileyModalDisplay(event)}>
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button onClick={changeFontfamily} className="material-icons">
          &#xe165;
        </button>
        <button onClick={changeBackgroundColor} className="material-icons">
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

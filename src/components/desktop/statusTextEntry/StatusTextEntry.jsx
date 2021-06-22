import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { statusActions } from '../../data/statusSlice'
import { Smileys } from '../../../common'
import { changeBackgroundColor, changeFontFamily } from '../../../common/helpers/statusPage'
import database from '../../../database'
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
    const {value} = event.target
    setStatusInputValue(value)
    setSendButtonIsActive(value.trim().length >= 1)
  }

  const stringIsUrl = string => {
    let url
    if (typeof (string) !== 'string') {
      return false
    }
    if (string.includes('www.')) {
      return true
    }
    try {
      url = new URL(string)
    } catch (error) {
      return false
    }

    return url.protocol === 'https:' || url.protocol === 'http:'
  }

  const convertURLToHTML = text => {
    const textArray = text.split(' ')
    textArray.forEach((value, index) => {
      if (stringIsUrl(value)) {
        textArray[index] = `<a href=${value} target="_blank" rel="noreferrer">${value}</a>`
      }
    })

    return textArray.join(' ')
  }

  const addStatusTextEntry = async () => {
    const id = 'id' + Date.now()
    const storedTime = new Date().getTime()
    const timeOfEntry = new Date().toLocaleString('en-US',
      {hour: 'numeric', minute: 'numeric', hour12: true}
    )

    const htmlText = convertURLToHTML(statusInputValue)

    const statusObject = {
      id,
      timeOfEntry,
      storedTime,
      backgroundColor,
      fontFamily,
      statusInputValue: htmlText
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
          onClick={() => changeFontFamily(fontFamily, setFontFamily)}
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

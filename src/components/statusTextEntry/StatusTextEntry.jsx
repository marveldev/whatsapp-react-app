import { useState } from 'react'
import { useHistory } from 'react-router'
import { Smileys } from '../../common/components/Smileys'
import './statusTextEntry.scss'

const StatusTextEntry = () => {
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [statusInputValue, setStatusInputValue] = useState('')
  const [cursorPosition, setCursorPosition] = useState()
  // const randomColor = Math.floor(Math.random()*16777215).toString(16)
  const [backgroundColor, setBackgroundColor] = useState("#")
  const { goBack } = useHistory()

  const toggleSmileyModalDisplay = event => {
    setCursorPosition(event.pageX)
    setSmileyModalIsOpen(!smileyModalIsOpen)
  }

  const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
    setBackgroundColor("#" + randomColor)
  }

  return (
    <div className="status-text-entry" style={{backgroundColor}}>
      <div className="input-container">
        <textarea
          value={statusInputValue}
          onChange={event => setStatusInputValue(event.target.value)}
          placeholder="Type a status"
          autoFocus
        >
        </textarea>
      </div>
      <div className="status-input-options">
        <button
          onClick={(event) => toggleSmileyModalDisplay(event)}
        >
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button className="material-icons">&#xe165;</button>
        <button
          onClick={changeBackgroundColor}
          className="material-icons"
        >
          &#xe40a;
        </button>
      </div>
      <button onClick={goBack} className="back-button">
        <i className="material-icons">&#xe5c4;</i>
      </button>
      <button className="send-button">
        <i className="material-icons">&#xe163;</i>
      </button>
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

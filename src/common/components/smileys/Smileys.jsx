import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import smileyList from './smileyList'
import { chatActions } from '../../../components/data/chatSlice'
import './smileys.scss'

const Smileys = ({ setSendButtonIsActive,
  setStatusInputValue, statusInputValue, cursorPosition
}) => {
  const [filteredSmiley, setFilteredSmiley] = useState(smileyList)
  const { chatInputValue } = useSelector(state => state.chat)
  const location = useLocation()
  const dispatch = useDispatch()

  const addSmiley = smiley => {
    if (location.pathname === '/statusTextEntry') {
      setStatusInputValue(statusInputValue + smiley)
    } else {
      dispatch(chatActions.setChatInputValue(chatInputValue + smiley))
      setSendButtonIsActive(true)
    }
  }

  const filterSmileyList = value => {
    const newSmileyList = smileyList.filter(
      (smiley => smiley.description.toLowerCase().includes(value.toLowerCase()))
    )
    setFilteredSmiley(newSmileyList)
  }

  return (
    <div className="smileys" style={{left: (cursorPosition - 70 + 'px')}}>
      <div className="search-container">
        <span className="material-icons">&#xe8b6;</span>
        <input type="text"
          className="search-input"
          placeholder="Search emoji"
          onChange={event => filterSmileyList(event.target.value)}
        />
      </div>
      <div className="smiley-list">
        {filteredSmiley.map((item, index) => (
          <button key={index}
            onClick={() => addSmiley(item.smiley)}
            className="smiley"
          >
            {item.smiley}
          </button>
        ))}
      </div>
      <div className="arrow-down" />
    </div>
  )
}

export default Smileys

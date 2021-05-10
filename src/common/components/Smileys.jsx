import { useState } from 'react'
import smileyList from '../smileyList'
import '../smileys.scss'

export const Smileys = ({
  setChatInputValue, chatInputValue, setSendButtonIsActive
}) => {
  const [filteredSmiley, setFilteredSmiley] = useState(smileyList)

  const addSmiley = smiley => {
    setChatInputValue(chatInputValue + smiley)
    setSendButtonIsActive(true)
  }

  const filterSmileyList = value => {
    const newSmileyList = smileyList.filter(
      (smiley => smiley.description.includes(value))
    )
    setFilteredSmiley(newSmileyList)
  }

  return (
    <div className="smileys">
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
      <div className="arrow-down"></div>
    </div>
  )
}

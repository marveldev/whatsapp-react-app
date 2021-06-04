import { useState } from 'react'
import { useSelector } from 'react-redux'

const ChatItems = () => {
  const [chatDropdown, setChatDropdown] = useState()
  const { selectedContact } = useSelector(state => state.homePage)
  const { chats } = useSelector(state => state.chat)

  const toggleDropdownButton = (selector, value) => {
    const dropdownButton = document.querySelector(`[property=${selector}]`)
    dropdownButton.style.display = value
  }

  const displayDropdown = event => {
    const left = event.clientX - 180
    const top = event.clientY + 10
    const positionDropdown = {left, top}
    setChatDropdown(positionDropdown)
  }

  const filteredChatData = chats?.filter(item => item.contactId === selectedContact.id)

  return (
    <div className="chat-output-container">
      {filteredChatData?.map((chat, index) => (
        <div key={index} id={chat.id}
          className={chat.selected ? 'selected chat-item-wrapper' : 'chat-item-wrapper'}
        >
          <div className="checkbox-container">
            <label className="container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="chat-content-wrapper">
            <div className={chat.person === 'person-one' ? 'arrow-left' : 'arrow-right'}></div>
            <div className={`${chat.person} chat-item`}>
              <div
                onMouseOver={() => toggleDropdownButton(chat.id, 'block')}
                onMouseLeave={() => toggleDropdownButton(chat.id, 'none')}
              >
                <div className="content">
                  <p className="chat-text">{chat.chatInputValue}</p>
                  <div className="chat-time">
                    <small>{chat.chatTime}</small>
                    <i className="material-icons">&#xe877;</i>
                  </div>
                </div>
                <button
                  onClick={event => displayDropdown(event)}
                  className="angle-down-button" property={chat.id}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {chatDropdown && (
        <div>
          <div onClick={() => setChatDropdown(false)} className="overlay"></div>
          <div className="chat-dropdown" style={chatDropdown}>
            <button>Reply</button>
            <button>Forward message</button>
            <button>Star message</button>
            <button>Delete message</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatItems

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markAsSelected } from '../../../common/helpers/chatPage'

const ChatItems = ({ selectChatModalIsOpen, setDeleteModalIsOpen, setSelectedChatId }) => {
  const [dropdownStyle, setDropdownStyle] = useState()
  const { selectedContact } = useSelector(state => state.homePage)
  const { chats, selectedChatCount } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const toggleDropdownButton = (selector, value) => {
    const dropdownButton = document.querySelector(`[property=${selector}]`)
    dropdownButton.style.display = value
  }

  const displayDropdown = (event, person, chatId) => {
    const left = person === 'person-one' ? event.clientX : event.clientX - 170
    const top = event.clientY
    const position = {left, top}
    setDropdownStyle(position)
    setSelectedChatId(chatId)
  }

  const filteredChatData = chats?.filter(item => item.contactId === selectedContact.id)

  return (
    <div className="chat-output-container">
      {filteredChatData?.map((chat, index) => (
        <div key={index} id={chat.id}
          className={chat.selected ? 'selected chat-item-wrapper' : 'chat-item-wrapper'}
        >
          {selectChatModalIsOpen && (
            <div className="checkbox-container">
              <label className="container">
                <input type="checkbox"
                  onChange={() => markAsSelected(chat, chats, dispatch, selectedChatCount)}
                />
                <span className="checkmark" />
              </label>
            </div>
          )}
          <div className="chat-content-wrapper">
            <div className={chat.person === 'person-one' ? 'arrow-left' : 'arrow-right'} />
            <div className={`${chat.person} chat-item`}>
              <div
                onMouseOver={() => toggleDropdownButton(chat.id, 'block')}
                onMouseLeave={() => toggleDropdownButton(chat.id, 'none')}
              >
                <div className="content">
                  {chat.chatPhoto &&
                    <img src={chat.chatPhoto} className="chat-photo" alt="chatPhoto" />
                  }
                  <p className="chat-text">{chat.chatInputValue}</p>
                  <div className="chat-time">
                    <small>{chat.chatTime}</small>
                    <i className="material-icons">&#xe877;</i>
                  </div>
                </div>
                <button
                  onClick={event => displayDropdown(event, chat.person, chat.id)}
                  className="angle-down-button" property={chat.id}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {dropdownStyle && (
        <div onClick={() => setDropdownStyle()}>
          <div onClick={() => setSelectedChatId()} className="overlay" />
          <div className="chat-dropdown" style={dropdownStyle}>
            <button>Reply</button>
            <button>Forward message</button>
            <button>Star message</button>
            <button
              onClick={() => setDeleteModalIsOpen(true)}
            >
              Delete message
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatItems

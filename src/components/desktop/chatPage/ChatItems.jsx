import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'

const ChatItems = ({ selectChatModalIsOpen, setDeleteModalIsOpen, deleteModalIsOpen }) => {
  const [chatDropdownPosition, setChatDropdownPosition] = useState()
  const { selectedContact } = useSelector(state => state.homePage)
  const { chats, selectedChatCount } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const toggleDropdownButton = (selector, value) => {
    const dropdownButton = document.querySelector(`[property=${selector}]`)
    dropdownButton.style.display = value
  }

  const displayDropdown = (event, person) => {
    const left = person === 'person-one' ? event.clientX : event.clientX - 170
    const top = event.clientY
    const position = {left, top}
    setChatDropdownPosition(position)
  }

  const deleteSelectedChat = async () => {
    const newData = chats.filter(chat => !chat.selected)
    const selectedChatData = chats.filter(chat => chat.selected)
    dispatch(chatActions.addMultipleChat(newData))

    for (let index = 0; index < selectedChatData.length; index++) {
      const chatId = selectedChatData[index].id
      await database.chat.delete(chatId)
    }
  }

  const markAsSelected = selectedChat => {
    const newData = {...selectedChat, selected: !selectedChat.selected}
    const mutableChatData = [...chats]
    const selectedChatIndex = mutableChatData.indexOf(selectedChat)
    mutableChatData[selectedChatIndex] = newData
    dispatch(chatActions.addMultipleChat(mutableChatData))

    if (newData.selected) {
      dispatch(chatActions.setSelectedChatCount(selectedChatCount + 1))
    } else {
      dispatch(chatActions.setSelectedChatCount(selectedChatCount - 1))
    }
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
                <input type="checkbox" onChange={() => markAsSelected(chat)} />
                <span className="checkmark"></span>
              </label>
            </div>
          )}
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
                  onClick={event => displayDropdown(event, chat.person)}
                  className="angle-down-button" property={chat.id}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {chatDropdownPosition && (
        <div onClick={() => setChatDropdownPosition(false)}>
          <div className="overlay"></div>
          <div className="chat-dropdown" style={chatDropdownPosition}>
            <button>Reply</button>
            <button>Forward message</button>
            <button>Star message</button>
            <button onClick={() => setDeleteModalIsOpen(true)}>Delete message</button>
          </div>
        </div>
      )}
      {deleteModalIsOpen && (
        <div onClick={() => setDeleteModalIsOpen(false)} className="modal-overlay">
          <div className="delete-modal">
            <p>Delete messages?</p>
            <button>CANCEL</button>
            <button onClick={deleteSelectedChat} className="clear-button">CLEAR</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatItems

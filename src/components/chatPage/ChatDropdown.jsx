import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatActions } from './slice'

const ChatDropdown = ({ setChatDropdownIsOpen, selectedContact }) => {
  const [currentContent, setCurrentContent] = useState('dropdown')
  const chatState = useSelector(state => state.chat)
  const { chatData } = chatState
  const dispatch = useDispatch()

  const clearChat = () => {
    const newChatData = chatData.filter(item => item.contactId !== selectedContact.id)
    dispatch(chatActions.addMultipleChat(newChatData))
  }

  return (
    <div>
      {currentContent === 'dropdown' && (
        <>
          <div onClick={() => setChatDropdownIsOpen(false)} className="dropdown-overlay"></div>
          <div className="chat-dropdown">
            <button>View contact</button>
            <button>Media, links, and docs</button>
            <button>Search</button>
            <button>Mute notifications</button>
            <button onClick={() => setCurrentContent('wallpaper-options')}>
              Wallpaper
            </button>
            <button onClick={() => setCurrentContent('delete-modal')}>
              Clear chat
            </button>
          </div>
        </>
      )}
      {currentContent === 'delete-modal' && (
        <div onClick={() => setChatDropdownIsOpen(false)} className="overlay">
          <div className="delete-modal">
            <p>Are you sure you want to clear messages in this chat?</p>
            <button>CANCEL</button>
            <button onClick={clearChat}>CLEAR</button>
          </div>
        </div>
      )}
      {currentContent === 'wallpaper-options' && (
        <div onClick={() => setChatDropdownIsOpen(false)} className="overlay">
          <div className="wallpaper-options">
            <p>Wallpaper</p>
            <button className="default-button">
              <i className="material-icons">&#xe5d5;</i>
              <span>Default</span>
            </button>
            <button>
              <input type="file" id="wallpaperPicker" />
              <label htmlFor="wallpaperPicker">
                <i className="fa fa-photo"></i>
                <span>Gallery</span>
              </label>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatDropdown

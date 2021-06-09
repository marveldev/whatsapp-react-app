import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'

const ChatDropdown = ({ setDropdownIsOpen }) => {
  const [currentContent, setCurrentContent] = useState('dropdown')
  const { chats } = useSelector(state => state.chat)
  const { selectedContact } = useSelector(state => state.homePage)
  const dispatch = useDispatch()

  const clearChat = async () => {
    const newData = chats.filter(item => item.contactId !== selectedContact.id)
    const selectedChatData = chats.filter(item =>
      item.contactId === selectedContact.id
    )
    dispatch(chatActions.addMultipleChat(newData))

    for (let index = 0; index < selectedChatData.length; index++) {
      const chatId = selectedChatData[index].id
      await database.chat.delete(chatId)
    }
  }

  const doStuff = () => {
    setCurrentContent('select-chat-modal')
    const stuffs = document.querySelectorAll('.checkbox-container')
    stuffs?.forEach((stuff) => {
      stuff.style.display = 'block'
    })
  }

  return (
    <div>
      {currentContent === 'dropdown' && (
        <div>
          <div onClick={() => setDropdownIsOpen(false)} className="overlay"></div>
          <div className="header-dropdown">
            <button>Contact info</button>
            <button onClick={() => doStuff()}>
              Select messages
            </button>
            <button>Mute notifications</button>
            <button onClick={() => setCurrentContent('clear-modal')}>
              Clear messages
            </button>
            <button>Delete chat</button>
          </div>
        </div>
      )}
      {currentContent === 'clear-modal' && (
        <div onClick={() => setDropdownIsOpen(false)}
          className="overlay"
          style={{background: '#fefffecc'}}
        >
          <div className="clear-modal">
            <p>Are you sure you want to clear messages in this chat?</p>
            <button>CANCEL</button>
            <button onClick={clearChat} className="clear-button">CLEAR</button>
          </div>
        </div>
      )}
      {currentContent === 'select-chat-modal' && (
        <div>
          <div onClick={() => {}} className="overlay"></div>
          <div className="select-chat-modal">
            <i className="material-icons">&#xe5cd;</i>
            <span>{1} selected</span>
            <div>
              <button><i className="fa fa-star"></i></button>
              <button onClick={() => {}}>
                <i className="fa fa-trash"></i>
              </button>
              <button><i className="fa fa-mail-forward"></i></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatDropdown

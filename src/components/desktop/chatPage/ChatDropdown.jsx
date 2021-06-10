import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'
import { homePageActions } from '../homePage/slice'

const ChatDropdown = ({
  setDropdownIsOpen, setSelectChatModalIsOpen,
  selectChatModalIsOpen, setDeleteModalIsOpen
}) => {
  const [currentContent, setCurrentContent] = useState('dropdown')
  const { chats, selectedChatCount } = useSelector(state => state.chat)
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

  const openSelectChatModal = () => {
    setSelectChatModalIsOpen(true)
    setCurrentContent()
  }

  const closeSelectChatModal = () => {
    const newData = chats.map(chat => {
      return {...chat, selected: false}
    })

    dispatch(chatActions.addMultipleChat(newData))
    dispatch(chatActions.setSelectedChatCount(0))
    setDropdownIsOpen(false)
    setSelectChatModalIsOpen(false)
  }

  const openContactInfoPane = () => {
    dispatch(homePageActions.setRightPaneIsOpen(true))
    setDropdownIsOpen(false)
  }

  return (
    <div>
      {currentContent === 'dropdown' && (
        <div>
          <div onClick={() => setDropdownIsOpen(false)} className="overlay"></div>
          <div className="header-dropdown">
            <button onClick={openContactInfoPane}>
              Contact info
            </button>
            <button onClick={openSelectChatModal}>
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
        <div onClick={() => setDropdownIsOpen(false)} className="modal-overlay">
          <div className="clear-modal">
            <p>Are you sure you want to clear messages in this chat?</p>
            <button>CANCEL</button>
            <button onClick={clearChat} className="clear-button">CLEAR</button>
          </div>
        </div>
      )}
      {selectChatModalIsOpen && (
        <div>
          <div className="overlay"></div>
          <div className="select-chat-modal">
            <button onClick={closeSelectChatModal}
              className="material-icons"
            >
              &#xe5cd;
            </button>
            <span>{selectedChatCount} selected</span>
            <div className={selectedChatCount >= 1 ? 'active' : ''}>
              <button><i className="fa fa-star"></i></button>
              <button onClick={() => setDeleteModalIsOpen(true)}>
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

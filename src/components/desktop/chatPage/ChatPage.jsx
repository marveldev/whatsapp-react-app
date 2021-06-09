import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Smileys } from '../../../common/components'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'
import ChatDropdown from './ChatDropdown'
import ChatItems from './ChatItems'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState()
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState()
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const [selectChatModalIsOpen, setSelectChatModalIsOpen] = useState()
  const [chatInputValue, setChatInputValue] = useState('')
  const { selectedContact } = useSelector(state => state.homePage)
  const { chats } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const displaySendButton = event => {
    const chatBox = event.target
    chatBox.style.height = "1px"
    chatBox.style.height = (3+chatBox.scrollHeight)+"px"
    if (chatBox.value.trim().length >= 1) {
      setSendButtonIsActive(true)
    } else {
      setSendButtonIsActive(false)
    }
  }

  const deleteSelectedChat = async () => {
    const newData = chats.filter(chat => !chat.selected)
    const selectedChatData = chats.filter(chat => chat.selected)
    dispatch(chatActions.addMultipleChat(newData))
    dispatch(chatActions.setSelectedChatCount(0))
    setDropdownIsOpen(false)
    setSelectChatModalIsOpen(false)

    for (let index = 0; index < selectedChatData.length; index++) {
      const chatId = selectedChatData[index].id
      await database.chat.delete(chatId)
    }
  }

  const addChatItemToDom = async person => {
    const chatContainer = document.querySelector('.chat-output-container')
    const chatInput = document.querySelector('.chat-input')
    const id = 'id' + Date.parse(new Date()).toString()
    const chatTime = new Date().toLocaleString('en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )

    const chatObject = {
      id,
      person,
      chatTime,
      chatInputValue,
      contactId: selectedContact.id,
      selected: false
    }

    await database.chat.add(chatObject)
    chatContainer.scrollTop = chatContainer.scrollHeight
    chatInput.style.height = ''
    dispatch(chatActions.addChat(chatObject))
    setChatInputValue('')
    setSendButtonIsActive(false)
    setSmileyModalIsOpen(false)
    chatInput.focus()
  }

  return (
    <div className="desktop-chat-page">
      <div className="header">
        <div className="photo-container">
          <img src={selectedContact.profilePhoto}
            className="contact-photo" alt="contactPhoto"
          />
        </div>
        <div className="chat-person-info">
          <p>{selectedContact.name}</p>
          <p>online</p>
        </div>
        <div className="button-container">
          <button><i className="material-icons">&#xe8b6;</i></button>
          <button onClick={() => setDropdownIsOpen(true)}>
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <div>
        <ChatItems
          selectChatModalIsOpen={selectChatModalIsOpen}
          deleteModalIsOpen={deleteModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        />
      </div>
      <div className="chat-input-container">
        {smileyModalIsOpen &&
          <Smileys
            setChatInputValue={setChatInputValue}
            chatInputValue={chatInputValue}
            setSendButtonIsActive={setSendButtonIsActive}
          />
        }
        <button onClick={() => setSmileyModalIsOpen(!smileyModalIsOpen)}
          className="smiley-button"
        >
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button>
          <i className="material-icons">&#xe226;</i>
        </button>
        <textarea
          onKeyUp={event => displaySendButton(event)}
          className="chat-input"
          value={chatInputValue}
          placeholder="Type a message"
          onChange={event => setChatInputValue(event.target.value)}
          autoFocus
        >
        </textarea>
        <div>
          {sendButtonIsActive && (
            <div className="send-button-container">
              <button>
                <i className="material-icons">&#xe163;</i>
              </button>
              <div className="persons-button-container">
                <button
                  onClick={() => addChatItemToDom('person-one')}
                  className="person-one"
                >
                  Person1
                </button>
                <button onClick={() => addChatItemToDom('person-two')}>Person2</button>
                <div className="arrow-down"></div>
              </div>
            </div>
          )}
          {!sendButtonIsActive && (
            <button><i className="fa fa-microphone"></i></button>
          )}
        </div>
      </div>
      {dropdownIsOpen &&
        <ChatDropdown
          setDropdownIsOpen={setDropdownIsOpen}
          setSelectChatModalIsOpen={setSelectChatModalIsOpen}
          selectChatModalIsOpen={selectChatModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        />
      }
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

export default ChatPage

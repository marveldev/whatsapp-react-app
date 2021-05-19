import { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { constants, Smileys, lightThemeWallpaper } from '../../common'
import { displaySendButton } from './helper'
import { chatActions } from './slice'
import ChatDropdown from './ChatDropdown'
import contactList from '../contactListPage/contactList'
import './chatPage.scss'

const ChatPage = () => {
  const storedWallpaper = localStorage.getItem('storedWallpaper') || lightThemeWallpaper
  const [chatWallpaper, setChatWallpaper] = useState(storedWallpaper)
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [selectedChatCount, setSelectedChatCount] = useState(0)
  const [chatDropdownIsOpen, setChatDropdownIsOpen] = useState(false)
  const [chatInputValue, setChatInputValue] = useState('')
  const { chatData } = useSelector(state => state.chat)
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const { selectedContactIndex } = useParams()
  const selectedContact = contactList[selectedContactIndex]

  const markAsSelected = selectedChat => {
    const newData = {...selectedChat, selected: !selectedChat.selected}
    const mutableChatData = [...chatData]
    const selectedChatIndex = mutableChatData.indexOf(selectedChat)
    mutableChatData[selectedChatIndex] = newData
    dispatch(chatActions.addMultipleChat(mutableChatData))

    if (!selectedChat.selected) {
      setSelectedChatCount(selectedChatCount + 1)
    } else {
      setSelectedChatCount(selectedChatCount - 1)
    }
  }

  const deleteSelectedChat = () => {
    const newData = chatData.filter(
      chat => !chat.selected
    )

    dispatch(chatActions.addMultipleChat(newData))
    setSelectedChatCount(0)
  }

  const markAsUnselected = () => {
    const newData = chatData.map(chat => {
      return {...chat, selected: false}
    })

    setSelectedChatCount(0)
    dispatch(chatActions.addMultipleChat(newData))
  }

  const addChatItemToDom = person => {
    const chatContainer = document.querySelector('.chat-container')
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

    chatContainer.scrollTop = chatContainer.scrollHeight
    chatInput.style.height = ''
    dispatch(chatActions.addChat(chatObject))
    setChatInputValue('')
    setSendButtonIsActive(false)
    setSmileyModalIsOpen(false)
    chatInput.focus()
  }

  const filteredChatData = chatData.filter(item => item.contactId === selectedContact.id)

  const chatItems = filteredChatData?.map((chat, index) => (
    <div key={index} id={chat.id}
      onClick={() => markAsSelected(chat)}
      className={chat.selected ? 'selected chat-item-wrapper' : 'chat-item-wrapper'}
    >
      <div className="chat-item-overlay">
        <div className={chat.person === 'person-one' ? 'arrow-left' : 'arrow-right'}></div>
        <div className={`${chat.person} chat-item`}>
          <div className="content">
            <p className="chat-text">{chat.chatInputValue}</p>
            <div className="chat-time">
              <small>{chat.chatTime}</small>
              <i className="material-icons">&#xe877;</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="chat-page" style={{backgroundImage: `url(${chatWallpaper})`}}>
      <div className="header">
        <div onClick={goBack} className="back-button-container">
          <button>
            <i className="material-icons">&#xe5c4;</i>
          </button>
          <div className="photo-container">
            <img src={selectedContact.profilePhoto || constants.PHOTOURL}
              className="contact-photo" alt="contactPhoto"
            />
          </div>
        </div>
        <div className="chat-person-info">
          <p className="name">{selectedContact.name || 'Jane Doe'}</p>
          <p>online</p>
        </div>
        <div className="button-container">
          <button><i className="fa fa-video-camera"></i></button>
          <button><i className="fa fa-phone"></i></button>
          <button onClick={() => setChatDropdownIsOpen(true)}>
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <div className="chat-container">
        {chatItems}
      </div>
      <div className="chat-input-container">
        <div className="chat-input-options">
          <div className="smiley-container">
            <button
              onClick={() => setSmileyModalIsOpen(!smileyModalIsOpen)}
              className="smiley-button"
            >
              <i className="material-icons">&#xe7f2;</i>
            </button>
            {smileyModalIsOpen &&
              <Smileys
                setChatInputValue={setChatInputValue}
                chatInputValue={chatInputValue}
                setSendButtonIsActive={setSendButtonIsActive}
              />
            }
          </div>
          <textarea
            onKeyUp={() => displaySendButton('.chat-input', setSendButtonIsActive)}
            className="chat-input"
            value={chatInputValue}
            placeholder="Type a message"
            onChange={event => setChatInputValue(event.target.value)}
            autoFocus
          >
          </textarea>
          <button className="clip-button">
            <i className="fa fa-paperclip"></i>
          </button>
        </div>
        <div>
          {sendButtonIsActive && (
            <div className="send-button-container">
              <button className="send-button">
                <i className="material-icons">&#xe163;</i>
              </button>
              <div className="persons-button-container">
                <button
                  onClick={() => addChatItemToDom('person-one')}
                  className="person-one"
                >
                  Person1
                </button>
                <button
                  onClick={() => addChatItemToDom('person-two')}
                  className="person-two"
                >
                  Person2
                </button>
                <div className="arrow-down"></div>
              </div>
            </div>
          )}
          {!sendButtonIsActive && (
            <button className="record-button">
              <i className="fa fa-microphone"></i>
            </button>
          )}
        </div>
      </div>
      {selectedChatCount >= 1 && (
        <div className="selected-chat-options">
          <button onClick={markAsUnselected} className="back-button">
            <i className="material-icons">&#xe5c4;</i>
          </button>
          <span>{selectedChatCount}</span>
          <button><i className="fa fa-star"></i></button>
          <button onClick={() => setDeleteModalIsOpen(true)}>
            <i className="fa fa-trash"></i>
          </button>
          <button><i className="material-icons">&#xe14d;</i></button>
          <button><i className="fa fa-mail-forward"></i></button>
        </div>
      )}
      {deleteModalIsOpen && (
        <div onClick={() => setDeleteModalIsOpen(false)} className="overlay">
          <div className="delete-modal">
            <p>Delete message?</p>
            <button>CANCEL</button>
            <button onClick={deleteSelectedChat}>DELETE FOR ME</button>
          </div>
        </div>
      )}
      {chatDropdownIsOpen &&
        <ChatDropdown
          setChatDropdownIsOpen={setChatDropdownIsOpen}
          selectedContact={selectedContact}
          setChatWallpaper={setChatWallpaper}
        />
      }
    </div>
  )
}

export default ChatPage

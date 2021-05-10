import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CONSTANTS } from '../../common/constants'
import { Smileys } from '../../common/components'
import { displaySendButton } from './events'
import { chatActions } from './slice'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState(false)
  const [chatInputValue, setChatInputValue] = useState('')
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const chatState = useSelector(state => state.chat)
  const { chatData } = chatState

  const addChatItemToDom = person => {
    const chatContainer = document.querySelector('.chat-container')
    const chatInput = document.querySelector('.chat-input')
    const chatTime = new Date().toLocaleString('en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )

    const chatObject = {
      person,
      chatTime,
      chatInputValue
    }

    chatContainer.scrollTop = chatContainer.scrollHeight
    chatInput.style.height = ''
    dispatch(chatActions.addChat(chatObject))
    setChatInputValue('')
    setSendButtonIsActive(false)
    setSmileyModalIsOpen(false)
    chatInput.focus()
  }

  const chatItems = chatData?.map((chat, index) => (
    <div key={index} className="chat-item-wrapper">
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
    <div className="chat-page">
      <div className="header">
        <div onClick={() => goBack()} className="back-button-container">
          <button>
            <i className="material-icons">&#xe5c4;</i>
          </button>
          <div className="photo-container">
            <img src={CONSTANTS.PHOTOURL}
              className="contact-photo" alt="contactPhoto"
            />
          </div>
        </div>
        <div className="chat-person-info">
          <p className="name">Jack Williams</p>
          <p>online</p>
        </div>
        <div className="button-container">
          <button><i className="fa fa-video-camera"></i></button>
          <button><i className="fa fa-phone"></i></button>
          <button>
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
      {selectedChat && (
        <>
          <div className="selected-chat-options">
            <span>2</span>
            <button><i className="material-icons">&#xe5c4</i></button>
            <button><i className="fa fa-star"></i></button>
            <button><i className="fa fa-trash"></i></button>
            <button><i className="material-icons">&#xe14d</i></button>
            <button><i className="fa fa-mail-forward"></i></button>
          </div>
          <div className="delete-modal">
            <p>Delete message?</p>
            <button>CANCEL</button>
            <button>DELETE FOR ME</button>
          </div>
        </>
      )}
    </div>
  )
}

export default ChatPage

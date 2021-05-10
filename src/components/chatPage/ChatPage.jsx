import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CONSTANTS } from '../../common/constants'
import { Smileys } from '../../common/components'
import { addChatItemToDom, displaySendButton } from './events'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [postCaptionValue, setPostCaptionValue] = useState('')
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const chatState = useSelector(state => state.chat)
  const { chatData } = chatState

  const chatItems = chatData?.map(({id, person, chatTime, chatInputValue}) => (
    <div key={id} className="chat-item-wrapper">
      <div className="chat-item-overlay">
        <div className={person === 'person-one' ? 'arrow-left' : 'arrow-right'}></div>
        <div className={`${person} chat-item`}>
          <div className="content">
            <p className="chat-text">{chatInputValue}</p>
            <div className="chat-time">
              <small>{chatTime}</small>
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
                setPostCaptionValue={setPostCaptionValue}
                postCaptionValue={postCaptionValue}
                setSendButtonIsActive={setSendButtonIsActive}
              />
            }
          </div>
          <textarea
            onKeyUp={() => displaySendButton('.chat-input', setSendButtonIsActive)}
            className="chat-input"
            value={postCaptionValue}
            placeholder="Type a message"
            onChange={event => setPostCaptionValue(event.target.value)}
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
                  onClick={() => addChatItemToDom('.chat-input', 'person-one', dispatch)}
                  className="person-one"
                >
                  Person1
                </button>
                <button
                  onClick={() => addChatItemToDom('.chat-input', 'person-two', dispatch)}
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
    </div>
  )
}

export default ChatPage

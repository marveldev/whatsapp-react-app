import { useState } from 'react'
import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'
import { Smileys } from '../../common/components'
import { displaySendButton } from './events'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [postCaptionValue, setPostCaptionValue] = useState('')
  const { goBack } = useHistory()

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
        <div className="chat-item-wrapper">
          <div className="chat-item-overlay">
            <div className="arrow-left"></div>
            <div className="person-one chat-item">
              <div className="content">
                <p className="chat-text">This is a text chat</p>
                <div className="chat-time">
                  <small>4:00 PM</small>
                  <i className="material-icons">&#xe877;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-item-wrapper">
          <div className="chat-item-overlay">
            <div className="arrow-right"></div>
            <div className="person-two chat-item">
              <div className="content">
                <p className="chat-text">This is a second person text chat</p>
                <div className="chat-time">
                  <small>4:00 PM</small>
                  <i className="material-icons">&#xe877;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <button className="clip-button"><i className="fa fa-paperclip"></i></button>
        </div>
        <div>
          {sendButtonIsActive && (
            <div className="send-button-container">
              <button className="send-button">
                <i className="material-icons">&#xe163;</i>
              </button>
              <div className="persons-button-container">
                <button className="person-one">Person1</button>
                <button className="person-two">Person2</button>
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

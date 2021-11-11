import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ChatDropdown from './ChatDropdown'
import contactList from '../../data/contactList'
import { chatActions } from '../../data/chatSlice'
import { Smileys, lightThemeWallpaper, darkThemeWallpaper } from '../../../common'
import {
  addMessageToDom, displaySendButton, markAsSelected
} from '../../../common/helpers/chatPage'
import database from '../../../database'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState(false)
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [chatDropdownIsOpen, setChatDropdownIsOpen] = useState(false)
  const { theme, fontSize } = useSelector(state => state.displaySettings)
  const { chats, wallpaper, selectedChatCount, chatInputValue
  } = useSelector(state => state.chat)
  const { selectedContactIndex } = useParams()
  const selectedContact = contactList[selectedContactIndex]
  const defaultWallpaper = theme === 'Dark' ? darkThemeWallpaper : lightThemeWallpaper
  const chatWallpaper = wallpaper?.background || defaultWallpaper
  const history = useHistory()
  const dispatch = useDispatch()
  
  const deleteSelectedChat = async () => {
    const newData = chats.filter(chat => !chat.selected)
    const selectedChatData = chats.filter(chat => chat.selected)
    dispatch(chatActions.addMultipleChat(newData))
    dispatch(chatActions.setSelectedChatCount(0))

    for (let index = 0; index < selectedChatData.length; index++) {
      const chatId = selectedChatData[index].id
      await database.chat.delete(chatId)
    }
  }

  const markAsUnselected = () => {
    const newData = chats.map(chat => {
      return {...chat, selected: false}
    })
  
    dispatch(chatActions.setSelectedChatCount(0))
    dispatch(chatActions.addMultipleChat(newData))
  }

  const addMessageEvent = person => {
    addMessageToDom(person, selectedContact, dispatch)
    dispatch(chatActions.setChatInputValue(''))
    setSendButtonIsActive(false)
    setSmileyModalIsOpen(false)
  }
  
  const addChatPhotoPicker = event => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      dispatch(chatActions.setChatPhoto(photoReader.result))
      history.push(`/chatPhotoPreview/${selectedContactIndex}`)
    })
  }
  
  const filteredChatData = chats?.filter(item => item.contactId === selectedContact.id)

  const chatItems = filteredChatData?.map((chat, index) => (
    <div key={index} id={chat.id}
      onClick={() => markAsSelected(chat, chats, dispatch, selectedChatCount)}
      className={chat.selected ? 'selected chat-item-wrapper' : 'chat-item-wrapper'}
    >
      <div className="chat-item-overlay">
        <div className={chat.person === 'person-one' ? 'arrow-left' : 'arrow-right'} />
        <div className={`${chat.person} chat-item`}>
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
        </div>
      </div>
    </div>
  ))

  return (
    <div className="mobile-chat-page" style={{backgroundImage: `url(${chatWallpaper})`}}>
      <div className="header">
        <div onClick={history.goBack} className="back-button-container">
          <button>
            <i className="material-icons">&#xe5c4;</i>
          </button>
          <div className="photo-container">
            <img src={selectedContact?.profilePhoto}
              className="contact-photo" alt="contactPhoto"
            />
          </div>
        </div>
        <div onClick={() => history.push(`/contactInfoPage/${selectedContactIndex}`)}
          className="chat-person-info"
        >
          <p className="name">{selectedContact?.name}</p>
          <p>online</p>
        </div>
        <div className="button-container">
          <button><i className="fa fa-video-camera" /></button>
          <button><i className="fa fa-phone" /></button>
          <button id="dropdown" onClick={() => setChatDropdownIsOpen(true)}>
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <div className="chat-output-container" style={{fontSize}}>
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
                setSendButtonIsActive={setSendButtonIsActive}
              />
            }
          </div>
          <textarea
            onKeyUp={event => displaySendButton(event, setSendButtonIsActive)}
            className="chat-input"
            value={chatInputValue}
            placeholder="Type a message"
            onChange={event => dispatch(chatActions.setChatInputValue(event.target.value))}
            autoFocus
          >
          </textarea>
          <button className="clip-button">
            <input type="file" id="chatPhotoPicker" accept="image/*"
              onChange={(event) => addChatPhotoPicker(event)}
            />
            <label htmlFor="chatPhotoPicker">
              <i className="fa fa-paperclip" />
            </label>
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
                  onClick={() => addMessageEvent('person-one')}
                  className="person-one"
                >
                  Person1
                </button>
                <button
                  onClick={() => addMessageEvent('person-two')}
                  className="person-two"
                >
                  Person2
                </button>
                <div className="arrow-down" />
              </div>
            </div>
          )}
          {!sendButtonIsActive && (
            <button className="record-button">
              <i className="fa fa-microphone" />
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
          <button><i className="fa fa-star" /></button>
          <button id="deleteButton" onClick={() => setDeleteModalIsOpen(true)}>
            <i className="fa fa-trash" />
          </button>
          <button><i className="material-icons">&#xe14d;</i></button>
          <button><i className="fa fa-mail-forward" /></button>
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
        />
      }
    </div>
  )
}

export default ChatPage

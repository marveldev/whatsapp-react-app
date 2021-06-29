import { useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatDropdown from './ChatDropdown'
import ChatItems from './ChatItems'
import ChatPhotoPreview from './ChatPhotoPreview'
import { homePageActions } from '../homePage/slice'
import { chatActions } from '../../data/chatSlice'
import { Smileys } from '../../../common/components'
import {
  addMessageToDom, displaySendButton
} from '../../../common/helpers/chatPage'
import { darkThemeWallpaper, lightThemeWallpaper } from '../../../common'
import database from '../../../database'
import './chatPage.scss'

const ChatPage = () => {
  const [sendButtonIsActive, setSendButtonIsActive] = useState()
  const [smileyModalIsOpen, setSmileyModalIsOpen] = useState()
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const [userIsRecording, setUserIsRecording] = useState()
  const [selectChatModalIsOpen, setSelectChatModalIsOpen] = useState()
  const [selectedChatId, setSelectedChatId] = useState()
  const { selectedContact } = useSelector(state => state.homePage)
  const { chats, doodleIsChecked, wallpaper, chatPhoto, chatInputValue
  } = useSelector(state => state.chat)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()
  const [stream, setStream] = useState()
  const [recordCounter, setRecordCounter] = useState()
  const intervalRef = useRef(null)
  
  useLayoutEffect(() => {
    const defaultWallpaper = theme === 'Dark' ? darkThemeWallpaper : lightThemeWallpaper
    const chatSection = document.querySelector('.desktop-chat-page')
    const chatWallpaper = document.querySelector('.chat-wallpaper')

    if (doodleIsChecked) {
      chatWallpaper.style.opacity = 0.4
      chatSection.style.background = `url(${defaultWallpaper})`
    } else {
      chatWallpaper.style.opacity = 1
      chatSection.style.background = ''
    }
  }, [doodleIsChecked, theme])
  
  const recordAudio = async () => {
    setUserIsRecording(true)
    let timer = 0
    let minute = 0
    intervalRef.current = setInterval(() => {
      timer++
      if (timer > 60) {
        minute++
        timer = 0
      }
      const doubleDigitTimer = timer < 10 ? '0'+timer : timer
      setRecordCounter(`${minute}:${doubleDigitTimer}`)
    }, 1000)
    
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({ audio: true})
      setStream(userMedia)
    } catch (error) {
      console.log('error')
    }
  }
  
  const stopAudioRecording = () => {
    clearInterval(intervalRef.current)
    setRecordCounter('0:00')
    stream?.getAudioTracks()[0].stop()
    setUserIsRecording(false)
  }
  
  const addChatPhotoPicker = event => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      dispatch(chatActions.setChatPhoto(photoReader.result))
    })
  }

  const addMessageEvent = person => {
    addMessageToDom(person, selectedContact, dispatch)
    dispatch(chatActions.setChatInputValue(''))
    setSendButtonIsActive(false)
    setSmileyModalIsOpen(false)
  }

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false)
    setSelectedChatId()
  }

  const deleteSelectedChat = async () => {
    if (selectedChatId) {
      const newData = chats.filter(chat => chat.id !== selectedChatId)
      dispatch(chatActions.addMultipleChat(newData))
      await database.chat.delete(selectedChatId)
    } else {
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
  }

  return (
    <div className="desktop-chat-page">
      <div className="chat-wallpaper" style={wallpaper} />
      <div className="header">
        <div className="photo-container">
          <img src={selectedContact.profilePhoto}
            className="contact-photo" alt="contactPhoto"
          />
        </div>
        <div
          onClick={() => dispatch(homePageActions.setRightPaneIsOpen(true))}
          className="chat-person-info"
        >
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
      {chatPhoto && <ChatPhotoPreview setSendButtonIsActive={setSendButtonIsActive}/>}
      <div>
        <ChatItems
          selectChatModalIsOpen={selectChatModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
          setSelectedChatId={setSelectedChatId}
        />
        <audio id="chatAudio" controls>Audio not supported in your browser</audio>
      </div>
      <div className="chat-input-container">
        {smileyModalIsOpen &&
          <Smileys
            setSendButtonIsActive={setSendButtonIsActive}
          />
        }
        <button onClick={() => setSmileyModalIsOpen(!smileyModalIsOpen)}
          className="smiley-button"
        >
          <i className="material-icons">&#xe7f2;</i>
        </button>
        <button>
          <input type="file" id="chatPhotoPicker" accept="image/*"
            onChange={(event) => addChatPhotoPicker(event)}
          />
          <label htmlFor="chatPhotoPicker">
            <i className="material-icons">&#xe226;</i>
          </label>
        </button>
        <textarea
          onKeyUp={event => displaySendButton(event, setSendButtonIsActive)}
          className="chat-input"
          value={chatInputValue}
          placeholder="Type a message"
          onChange={event => dispatch(chatActions.setChatInputValue(event.target.value))}
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
                  onClick={() => addMessageEvent('person-one')}
                  className="person-one"
                >
                  Person1
                </button>
                <button onClick={() => addMessageEvent('person-two')}>Person2</button>
                <div className="arrow-down" />
              </div>
            </div>
          )}
          {!sendButtonIsActive && (
            <>
              {userIsRecording && (
                <div className="audio-options">
                  <button onClick={stopAudioRecording}>
                    <i className="material-icons stop-audio-icon">&#xe5cd;</i>
                  </button>
                  <p className="audio-timer">
                    <i className="material-icons">&#xe837;</i>
                    <span id="stuff">{recordCounter || '0:00'}</span>
                  </p>
                  <button>
                    <i className="material-icons send-audio-icon">&#xe5ca;</i>
                  </button>
                </div>
              )}
              {!userIsRecording && (
                <button onClick={recordAudio}>
                  <i className="fa fa-microphone" />
                </button>
              )}
            </>
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
        <div onClick={closeDeleteModal} className="modal-overlay">
          <div className="delete-modal">
            <p>Delete messages?</p>
            <button>CANCEL</button>
            <button className="clear-button" onClick={deleteSelectedChat}>
              CLEAR
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatPage

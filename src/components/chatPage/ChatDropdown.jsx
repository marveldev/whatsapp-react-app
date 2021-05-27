import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatActions } from './slice'
import { lightThemeWallpaper, darkThemeWallpaper } from '../../common'
import database from '../../database'

const ChatDropdown = ({
  setChatDropdownIsOpen, selectedContact, setChatWallpaper
}) => {
  const [currentContent, setCurrentContent] = useState('dropdown')
  const { theme } = useSelector(state => state.displaySettings)
  const { chats } = useSelector(state => state.chat)
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

  const addGalleryWallpaper = event => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      setChatWallpaper(photoReader.result)
      localStorage.setItem('storedWallpaper', photoReader.result)
    })

    setChatDropdownIsOpen(false)
  }

  const addDefaultWallpaper = () => {
    if (theme === 'Dark') {
      setChatWallpaper(darkThemeWallpaper)
      localStorage.setItem('storedWallpaper', darkThemeWallpaper)
    } else {
      setChatWallpaper(lightThemeWallpaper)
      localStorage.setItem('storedWallpaper', lightThemeWallpaper)
    }

    setChatDropdownIsOpen(false)
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
        <>
          <div onClick={() => setChatDropdownIsOpen(false)} className="overlay"></div>
          <div className="wallpaper-options">
            <p>Wallpaper</p>
            <button onClick={addDefaultWallpaper} className="default-button">
              <i className="material-icons">&#xe5d5;</i>
              <span>Default</span>
            </button>
            <button>
              <input type="file" id="wallpaperPicker" accept="image/*"
                onChange={(event) => addGalleryWallpaper(event)}
              />
              <label htmlFor="wallpaperPicker">
                <i className="fa fa-photo"></i>
                <span>Gallery</span>
              </label>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ChatDropdown

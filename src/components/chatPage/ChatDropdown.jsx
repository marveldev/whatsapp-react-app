import { useState } from 'react'

const ChatDropdown = ({ setChatDropdownIsOpen }) => {
  const [currentContent, setCurrentContent] = useState('dropdown')

  return (
    <div>
      {currentContent === 'dropdown' && (
        <div className="dropdown-overlay">
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
        </div>
      )}
      {currentContent === 'delete-modal' && (
        <div className="overlay">
          <div className="delete-modal">
            <p>Are you sure you want to clear messages in this chat?</p>
            <button>CANCEL</button>
            <button>CLEAR</button>
          </div>
        </div>
      )}
      {currentContent === 'wallpaper-options' && (
        <div className="overlay">
          <div className="wallpaper-options">
            <p>Wallpaper</p>
            <button className="default-button">
              <i className="material-icons">&#xe5d5;</i>
              <span>Default</span>
            </button>
            <button>
              <input type="file" id="wallpaperPicker" />
              <label htmlFor="wallpaperPicker">
                <i className="fa fa-photo"></i>
                <span>Gallery</span>
              </label>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatDropdown

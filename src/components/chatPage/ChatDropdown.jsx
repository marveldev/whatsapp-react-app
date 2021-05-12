import { useState } from 'react'

const ChatDropdown = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [wallpaperOptionsIsOpen, setWallpaperOptionsIsOpen] = useState(false)

  return (
    <>
      <div className="chat-dropdown">
        <button>View contact</button>
        <button>Media, links, and docs</button>
        <button>Search</button>
        <button>Mute notifications</button>
        <button>Wallpaper</button>
        <button>Clear chat</button>
      </div>
      {deleteModalIsOpen && (
        <div></div>
      )}
      {wallpaperOptionsIsOpen && (
        <div className="wallpaper-options">
          <p>Wallpaper</p>
          <button>
            <i className="material-icons">&#xe5d5;</i>
            <span>Default</span>
          </button>
          <button>
            <input type="file" id="wallpaperPicker" />
            <label for="wallpaperPicker">
              <i className="fa fa-photo"></i>
              <span>Gallery</span>
            </label>
          </button>
        </div>
      )}
    </>
  )
}

export default ChatDropdown

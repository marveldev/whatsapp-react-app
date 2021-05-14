import { useState } from 'react'
import { useHistory } from 'react-router'

const DisplaySettingsPage = () => {
  const [themeModalIsOpen, setThemeModalIsOpen] = useState(false)
  const [fontModalIsOpen, setFontModalIsOpen] = useState(false)
  const { goBack } = useHistory()

  return (
    <div className="display-settings-page">
      <div className="header">
        <button onClick={goBack} className="material-icons">&#xe5c4;</button>
        <p>Chats</p>
      </div>
      <div className="content">
        <div className="display-setting">
          <h4>Display</h4>
          <button onClick={() => setThemeModalIsOpen(true)}>
            <i className="material-icons">&#xe3ab;</i>
            <div>
              <p>Theme</p>
              <span>Light</span>
            </div>
          </button>
          <button>
            <i className="material-icons">&#xe1bc;</i>
            <div>
              <p>Wallpaper</p>
            </div>
          </button>
        </div>
        <div className="chat-settings">
          <h4>Chat settings</h4>
          <label>
            <div>
              <p>Enter is send</p>
              <span>Enter key will send your message</span>
            </div>
            <div className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
          <label>
            <div>
              <p>Media visibility</p>
              <span>Show newly downloaded media in your phone's gallery</span>
            </div>
            <div className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
          <button onClick={() => setFontModalIsOpen(true)}>
            <p>Font size</p>
            <span>Medium</span>
          </button>
        </div>
      </div>
      {themeModalIsOpen && (
        <div onClick={() => setThemeModalIsOpen(false)} className="overlay">
          <div className="theme-modal">
            <h3>Choose theme</h3>
            <div className="options">
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>System default</p>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>Light</p>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>Dark</p>
              </label>
            </div>
            <button>CANCEL</button>
            <button>OK</button>
          </div>
        </div>
      )}
      {fontModalIsOpen && (
        <div onClick={() => setFontModalIsOpen(false)} className="overlay">
          <div className="font-modal">
            <h3>Font-size</h3>
            <div className="options">
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>Small</p>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>Medium</p>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
                <p>Large</p>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplaySettingsPage

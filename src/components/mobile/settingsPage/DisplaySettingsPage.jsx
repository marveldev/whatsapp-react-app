import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { displaySettingsActions } from '../../data/settingsSlice'

const DisplaySettingsPage = () => {
  const [themeModalIsOpen, setThemeModalIsOpen] = useState(false)
  const [fontModalIsOpen, setFontModalIsOpen] = useState(false)
  const [themeValue, setThemeValue] = useState()
  const { theme, fontSize } = useSelector(state => state.displaySettings)
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(displaySettingsActions.setTheme(themeValue))
    localStorage.setItem('storedTheme', themeValue)
    setThemeModalIsOpen(false)
  }

  const changeFontSize = value => {
    dispatch(displaySettingsActions.setFontSize(value))
    localStorage.setItem('storedFontSize', value)
    setFontModalIsOpen(false)
  }

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
              <span>{theme}</span>
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
              <span className="slider round" />
            </div>
          </label>
          <label>
            <div>
              <p>Media visibility</p>
              <span>Show newly downloaded media in your phone's gallery</span>
            </div>
            <div className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </div>
          </label>
          <button onClick={() => setFontModalIsOpen(true)}>
            <p>Font size</p>
            <span>{fontSize}</span>
          </button>
        </div>
      </div>
      {themeModalIsOpen && (
        <>
          <div onClick={() => setThemeModalIsOpen(false)} className="overlay" />
          <div className="theme-modal">
            <h3>Choose theme</h3>
            <div className="options">
              <label onChange={() => setThemeValue('System default')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'System default'}
                />
                <span className="checkmark" />
                <p>System default</p>
              </label>
              <label onChange={() => setThemeValue('Light')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'Light'}
                />
                <span className="checkmark" />
                <p>Light</p>
              </label>
              <label onChange={() => setThemeValue('Dark')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'Dark'}
                />
                <span className="checkmark" />
                <p>Dark</p>
              </label>
            </div>
            <button onClick={() => setThemeModalIsOpen(false)}>CANCEL</button>
            <button onClick={changeTheme}>OK</button>
          </div>
        </>
      )}
      {fontModalIsOpen && (
        <>
          <div onClick={() => setFontModalIsOpen(false)} className="overlay" />
          <div className="font-modal">
            <h3>Font-size</h3>
            <div className="options">
              <label onChange={() => changeFontSize('Small')}>
                <input type="radio" name="font-size"
                  defaultChecked={fontSize === 'Small'}
                />
                <span className="checkmark" />
                <p>Small</p>
              </label>
              <label onChange={() => changeFontSize('Medium')}>
                <input type="radio" name="font-size"
                  defaultChecked={fontSize === 'Medium'}
                />
                <span className="checkmark" />
                <p>Medium</p>
              </label>
              <label onChange={() => changeFontSize('Large')}>
                <input type="radio" name="font-size"
                  defaultChecked={fontSize === 'Large'}
                />
                <span className="checkmark" />
                <p>Large</p>
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DisplaySettingsPage

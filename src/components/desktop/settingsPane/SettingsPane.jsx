import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../../common'
import { displaySettingsActions } from '../../data/settingsSlice'
import { homePageActions } from '../homePage/slice'
import './settingsPane.scss'

const SettingsPane = () => {
  const [themeModalIsOpen, setThemeModalIsOpen] = useState()
  const [themeValue, setThemeValue] = useState()
  const { profile } = useSelector(state => state.profile)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(displaySettingsActions.setTheme(themeValue))
    localStorage.setItem('storedTheme', themeValue)
    setThemeModalIsOpen(false)
  }

  return (
    <div className="settings-pane">
      <div className="header">
        <button onClick={() => dispatch(homePageActions.setPane('defaultPane'))}>
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <p>Settings</p>
      </div>
      <div className="content">
        <div onClick={() => dispatch(homePageActions.setPane('profilePane'))}
          className="profile-settings"
        >
          <div className="photo-container">
            <img src={profile?.profilePhoto || constants.PHOTOURL}
              id="profilePhoto" className="photo" alt="profile"
            />
          </div>
          <div>
            <p>{profile?.name || 'Add profile'}</p>
            <span>Available</span>
          </div>
        </div>
        <div className="settings-button-container">
          <button>
            <span className="material-icons">&#xe7f4;</span>
            <p>Notifications</p>
          </button>
          <button onClick={() => setThemeModalIsOpen(true)}>
            <span className="material-icons">&#xe3ab;</span>
            <p>Theme</p>
          </button>
          <button onClick={() => dispatch(homePageActions.setPane('wallpaperPane'))}>
            <span className="material-icons">&#xe1bc;</span>
            <p>Chat Wallpaper</p>
          </button>
          <button>
            <span className="material-icons">&#xe14b;</span>
            <p>Blocked</p>
          </button>
          <button>
            <span className="material-icons">&#xe887;</span>
            <p>Help</p>
          </button>
        </div>
      </div>
      {themeModalIsOpen && (
        <>
          <div onClick={() => setThemeModalIsOpen(false)} className="overlay"></div>
          <div className="theme-modal">
            <p>Choose theme</p>
            <div className="options">
              <label onChange={() => setThemeValue('System default')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'System default' ? true : false}
                />
                <p>System default</p>
              </label>
              <label onChange={() => setThemeValue('Light')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'Light' ? true : false}
                />
                <p>Light</p>
              </label>
              <label onChange={() => setThemeValue('Dark')}>
                <input type="radio" name="theme"
                  defaultChecked={theme === 'Dark' ? true : false}
                />
                <p>Dark</p>
              </label>
            </div>
            <button onClick={() => setThemeModalIsOpen(false)}>CANCEL</button>
            <button className="ok-button" onClick={changeTheme}>OK</button>
          </div>
        </>
      )}
    </div>
  )
}

export default SettingsPane

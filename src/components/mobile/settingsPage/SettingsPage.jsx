import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { constants } from '../../../common'
import './settingsPage.scss'

const SettingsPage = () => {
  const { profile } = useSelector(state => state.profile)
  const history = useHistory()

  return (
    <div className="settings-page">
      <div className="header">
        <button onClick={history.goBack} className="material-icons">&#xe5c4;</button>
        <p>Settings</p>
      </div>
      <div className="content">
        <div onClick={() => history.push('/profilePage')}
          className="user-profile" role="button" tabIndex="0"
        >
          <div className="photo-container">
            <img src={profile?.profilePhoto || constants.PHOTOURL}
              className="photo" alt="profile" />
          </div>
          <div className="info">
            <p>{profile?.name || 'Add Profile'}</p>
            <span>{profile?.about}</span>
          </div>
        </div>
        <div className="settings-options">
          <button>
            <i className="fa fa-key" />
            <div>
              <p>Account</p>
              <span>Privacy,security, change number</span>
            </div>
          </button>
          <button
            onClick={() => history.push('/displaySettingsPage')}
          >
            <i className="material-icons">&#xe0b7;</i>
            <div>
              <p>Chats</p>
              <span>Theme,wallpaper,chat history</span>
            </div>
          </button>
          <button>
            <i className="fa fa-bell" />
            <div>
              <p>Notification</p>
              <span>Message,group & call tones</span>
            </div>
          </button>
          <button>
            <i className="material-icons">&#xe1af;</i>
            <div>
              <p>Storage and data</p>
              <span>Network usage, auto-download</span>
            </div>
          </button>
          <button>
            <i className="material-icons">&#xe8fd;</i>
            <div>
              <p>Help</p>
              <span>FAQ, contact us, privacy policy</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage

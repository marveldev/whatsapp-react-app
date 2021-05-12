import { CONSTANTS } from '../../common/constants'

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="header">
        <button className="material-icons">&#xe5c4;</button>
        <p>Settings</p>
      </div>
      <div className="content">
        <div>
          <div className="photo-container">
            <img src={CONSTANTS.PHOTOURL}
              className="photo" alt="profile" />
          </div>
          <div>
            <span>Jack Williams</span>
            <p>Hey!, I am Jack.</p>
          </div>
        </div>
        <div>
          <button>
            <span className="fa fa-key"></span>
            <div>
              <p>Account</p>
              <span>Privacy,security, change number</span>
            </div>
          </button>
          <button>
            <span className="material-icons">&#xe0b7;</span>
            <div>
              <p>Chats</p>
              <span>Theme,wallpaper,chat history</span>
            </div>
          </button>
          <button>
            <span className="fa fa-bell"></span>
            <div>
              <p>Notification</p>
              <span>Message,group & call tones</span>
            </div>
          </button>
          <button>
            <span className="material-icons">&#xe1af;</span>
            <div>
              <p>Storage and data</p>
              <span>Network usuage, auto-download</span>
            </div>
          </button>
          <button>
            <span className="material-icons">&#xe8fd;</span>
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

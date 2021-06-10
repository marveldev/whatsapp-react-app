import { useSelector } from 'react-redux'
import './contactInfoPane.scss'

const ContactInfoPane = () => {
  const { selectedContact, rightPaneIsOpen }
  = useSelector(state => state.homePage)

  return (
    <div className="desktop-contact-info-pane">
      <div className="header">
        <button className="material-icons">&#xe5cd;</button>
        <p>Contact info</p>
      </div>
      <div className="content">
        <div className="contact-info">
          <div className="photo-container">
            <img src={selectedContact?.profilePhoto}
              id="profilePhoto" className="photo" alt="profile"
            />
          </div>
          <p>{selectedContact?.name}</p>
          <span>online</span>
        </div>
        <div className="wrapper">
          <div>
            <p>Mute notificatiion</p>
            <div className="checkbox-container">
              <label className="container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div>
            <p>Starred Messages</p>
            <button className="material-icons">&#xe315;</button>
          </div>
          <div>
            <div>
              <p>Disappearing messages</p>
              <small>Off</small>
            </div>
            <button className="material-icons">&#xe315;</button>
          </div>
        </div>
        <div className="wrapper">
          <h4>About and phone number</h4>
          <p>Hey there!, I am using Whatsapp.</p>
          <p>+234 655 466 4566</p>
        </div>
        <div className="button-wrapper">
          <button>
            <i className="material-icons">&#xe14b;</i>
            <span>Block</span>
          </button>
          <button>
            <i className="material-icons">&#xe8db;</i>
            <span>Report contact</span>
          </button>
          <button>
            <i className="material-icons">&#xe8db;</i>
            <span>Delete chat</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoPane

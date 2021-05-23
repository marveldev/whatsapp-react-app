import { useHistory } from 'react-router-dom'
import { constants } from '../../common'
import './contactInfoPage.scss'

const ContactInfoPage = () => {
  const { goBack } = useHistory()

  return (
    <div className="contact-info-page">
      <div className="header">
        <div className="button-container">
          <button onClick={goBack}><i className="material-icons">&#xe5c4;</i></button>
          <button><i className="material-icons">&#xe5d4;</i></button>
        </div>
        <div className="photo-container">
          <img src={constants.PHOTOURL} className="photo" alt="contact" />
        </div>
        <div className="contact-name">Jack Williams</div>
        <div className="fade-in-info">
          <button><i className="material-icons">&#xe5c4;</i></button>
          <span>Jack Williams</span>
          <button><i className="material-icons">&#xe5d4;</i></button>
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div>
            <span>Mute notifications</span>
            <label className="switch-wrapper">
              <div className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </div>
            </label>
          </div>
          <p>Custom notifications</p>
          <p>Media visibility</p>
        </div>
        <div className="wrapper">
          <div className="message">
            <div>
              <p>Disappearing messages</p>
              <small>Off</small>
            </div>
            <button><i className="material-icons">&#xe192;</i></button>
          </div>
          <div className="message">
            <div>
              <p>Encryption</p>
              <small>Messages and calls are end-to-end encrpted.Tap to verify.</small>
            </div>
            <button><i className="material-icons">&#xe63f;</i></button>
          </div>
        </div>
        <div className="wrapper">
          <div className="about">
            <h4>About and phone number</h4>
            <div>
              <p>Hey there!, I am using Whatsapp.</p>
              <small>September 23, 2020</small>
            </div>
          </div>
          <div>
            <span>+234 655 466 4566</span>
            <div>
              <button><i className="material-icons">&#xe0b7;</i></button>
              <button><i className="fa fa-phone"></i></button>
              <button><i className="fa fa-video-camera"></i></button>
            </div>
          </div>
        </div>
        <button className="button">
          <i className="material-icons">&#xe14b;</i>
          <span>Block</span>
        </button>
        <button className="button">
          <i className="material-icons">&#xe8db;</i>
          <span>Report contact</span>
        </button>
      </div>
    </div>
  )
}

export default ContactInfoPage

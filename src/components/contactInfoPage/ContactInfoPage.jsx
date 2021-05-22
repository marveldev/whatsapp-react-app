import { constants } from "../../common"
import './contactInfoPage.scss'

const ContactInfoPage = () => {
  return (
    <div className="contact-info-page">
      <div className="header">
        <div className="button-container">
          <button><i className="material-icons">&#xe5c4;</i></button>
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
        <div>
          <div className="page-info">
            <span>Mute notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <p>Custom notifications</p>
          <p>Media visibility</p>
        </div>
        <div>
          <div className="page-info">
            <div>
              <span>Disappearing messages</span>
              <small>Off</small>
            </div>
            <button><i className="material-icons">&#xe192;</i></button>
          </div>
          <div className="page-info">
            <div>
              <span>Encryption</span>
              <small>Messages and calls are end-to-end encrpted.Tap to verify.</small>
            </div>
            <button><i className="material-icons">&#xe63f;</i></button>
          </div>
        </div>
        <div>
          <div className="person-about">
            <span>About and phone number</span>
            <span>Hey there!, I am using Whatsapp.</span>
            <small>September 23, 2020</small>
          </div>
          <div className="person-contact">
            <span>+234 655 466 4566</span>
            <div>
              <button type="button"><i className="material-icons">&#xe0b7;</i></button>
              <button type="button"><i className="fa fa-phone"></i></button>
              <button type="button"><i className="fa fa-video-camera"></i></button>
            </div>
          </div>
        </div>
        <button className="complain-button">
          <span><i className="material-icons">&#xe14b;</i></span>
          <span>Block</span>
        </button>
        <button className="complain-button">
          <span><i className="material-icons">&#xe8db;</i></span>
          <span>Report contact</span>
        </button>
      </div>
    </div>
  )
}

export default ContactInfoPage

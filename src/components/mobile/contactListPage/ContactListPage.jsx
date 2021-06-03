import { useState } from 'react'
import { useHistory } from 'react-router'
import contactList from './contactList'
import './contactListPage.scss'

const ContactListPage = () => {
  const [selectedContactIndex, setSelectedContactIndex] = useState()
  const history = useHistory()

  return (
    <div className="contact-list-page">
      <div className="contact-list">
        {contactList.map((contact, index) => (
          <div key={contact.id} className="contact" role="button" tabIndex="0">
            <div onClick={() => setSelectedContactIndex(index)} className="photo-container">
              <img src={contact.profilePhoto} className="contact-photo" alt="contact" />
            </div>
            <div onClick={() => history.push(`/chatPage/${index}`)} className="info">
              <p>{contact.name}</p>
              <div>
                <span>Hello</span>
                <span className="notification">1</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedContactIndex >=0 && (
        <>
          <div onClick={() => setSelectedContactIndex()} className="overlay"></div>
          <div className="contact-modal">
            <img src={contactList[selectedContactIndex].profilePhoto}
              className="contact-photo" alt="contact"
            />
            <div className="button-container">
              <button onClick={() => history.push(`/chatPage/${selectedContactIndex}`)}>
                <i className="material-icons">&#xe0b7;</i>
              </button>
              <button><i className="fa fa-phone"></i></button>
              <button><i className="fa fa-video-camera"></i></button>
              <button onClick={() => history.push(`/contactInfoPage/${selectedContactIndex}`)}>
                <i className="material-icons">&#xe88f;</i>
              </button>
            </div>
            <div className="contact-name">{contactList[selectedContactIndex].name}</div>
          </div>
        </>
      )}
      <button className="message-icon"><i className="material-icons">&#xe0b7;</i></button>
    </div>
  )
}

export default ContactListPage

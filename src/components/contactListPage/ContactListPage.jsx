import { useHistory } from 'react-router'
import contactList from './contactList'
import './contactListPage.scss'

const ContactListPage = () => {
  const history = useHistory()

  return (
    <div className="contact-list-page">
      <div className="contact-list">
        {contactList.map((contact, index) => (
          <div key={contact.id} className="contact" role="button" tabIndex="0">
            <div onClick={() => history.push('/contactInfoPage')} className="photo-container">
              <img src={contact.profilePhoto} className="contact-photo" alt="contact" />
            </div>
            <div onClick={() => history.push(`/chatPage/${index}`)} className="info">
              <p>{contact.name}</p>
              <div>
                <span>Hello</span>
                <span className="notification">2</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="message-icon"><i className="material-icons">&#xe0b7;</i></button>
    </div>
  )
}

export default ContactListPage

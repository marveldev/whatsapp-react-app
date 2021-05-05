import contactList from './contactList'
import './chatPage.scss'

const ContactListPage = () => {
  return (
    <div className="contact-list-page">
      <div className="contact-list">
        {contactList.map(({ id, name, profilePhoto }) => (
          <div key={id} className="contact" role="button" tabIndex="0">
            <div className="photo-container">
              <img src={profilePhoto} className="contact-photo" alt="contact" />
            </div>
            <div className="info">
              <p>{name}</p>
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

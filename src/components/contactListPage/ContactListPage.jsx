import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import contactList from './contactList'
import { contactListActions } from './slice'
import './contactListPage.scss'

const ContactListPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const switchCurrentPage = (contact) => {
    history.push('/chatPage')
    dispatch(contactListActions.addSelectedContact(contact))
  }

  return (
    <div className="contact-list-page">
      <div className="contact-list">
        {contactList.map(contact => (
          <div key={contact.id} className="contact" role="button" tabIndex="0">
            <div className="photo-container">
              <img src={contact.profilePhoto} className="contact-photo" alt="contact" />
            </div>
            <div onClick={() => switchCurrentPage(contact)} className="info">
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

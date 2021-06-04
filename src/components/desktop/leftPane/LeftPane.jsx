import { useDispatch } from 'react-redux'
import contactList from './contactList'
import constants from '../../../common/constants' //
import { homePageActions } from '../homePage/slice'
import './leftPane.scss'

const LeftPane = () => {
  const dispatch = useDispatch()

  return (
    <div className="left-pane">
      <div className="header">
        <div className="nav-buttons">
          <div className="photo-container">
            <img src={constants.PHOTOURL}
              className="profile-photo" alt="profile"
            />
          </div>
          <div>
            <button><i className="material-icons">&#xe1af;</i></button>
            <button><i className="material-icons">&#xe0b7;</i></button>
            <button><i className="material-icons">&#xe5d4;</i></button>
          </div>
        </div>
        <div className="search-box">
          <i className="material-icons">&#xe8b6;</i>
          <textarea placeholder="Search or start a new chat"></textarea>
        </div>
      </div>
      <div className="content">
        <div className="contact-list">
          {contactList.map(contact => (
            <div onClick={() => dispatch(homePageActions.selectContact(contact))}
              key={contact.id} className="contact"
              role="button" tabIndex="0"
            >
              <div className="photo-container">
                <img src={contact.profilePhoto} className="contact-photo" alt="contact" />
              </div>
              <div className="info">
                <p>{contact.name}</p>
                <div>
                  <span>Hello</span>
                  <span className="notification">1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftPane

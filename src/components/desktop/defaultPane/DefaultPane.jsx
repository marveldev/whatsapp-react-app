import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { homePageActions } from '../homePage/slice'
import contactList from '../../data/contactList'
import constants from '../../../common/constants'
import './defaultPane.scss'

const DefaultPane = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const { profile } = useSelector(state => state.profile)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className="default-pane">
      <div className="header">
        <div className="nav-buttons">
          <div onClick={() => dispatch(homePageActions.setPane('profilePane'))}
            className="photo-container"
          >
            <img src={profile?.profilePhoto || constants.PHOTOURL}
              className="profile-photo" alt="profile"
            />
          </div>
          <div>
            <button onClick={() => history.push('/status')}>
              <i className="material-icons">&#xe1af;</i>
            </button>
            <button><i className="material-icons">&#xe0b7;</i></button>
            <button onClick={() => setDropdownIsOpen(true)}>
              <i className="material-icons">&#xe5d4;</i>
            </button>
          </div>
        </div>
        <div className="search-box">
          <i className="material-icons search-icon">&#xe8b6;</i>
          <input placeholder="Search or start a new chat"></input>
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
      {dropdownIsOpen && (
        <div>
          <div onClick={() => setDropdownIsOpen(false)} className="overlay"></div>
          <div className="dropdown">
            <button>New group</button>
            <button>Create a room</button>
            <button onClick={() => dispatch(homePageActions.setPane('profilePane'))}>
              Profile
            </button>
            <button>Archived</button>
            <button>Starred</button>
            <button onClick={() => dispatch(homePageActions.setPane('settingsPane'))}>
              Settings
            </button>
            <button>Log out</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DefaultPane

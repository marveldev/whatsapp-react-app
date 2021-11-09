import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { constants } from '../../../common'
import { addPhotoFilePicker, updateProfile } from '../../../common/helpers/profilePage'
import './profilePage.scss'

const ProfilePage = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const [nameButtonIsOpen, setNameButtonIsOpen] = useState(null)
  const [aboutButtonIsOpen, setAboutButtonIsOpen] = useState(null)
  const { profile } = useSelector(state => state.profile)
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  return (
    <div className="profile-page">
      <div className="header">
        <button
          onClick={goBack}
          id="profileBackButton"
          className="material-icons"
        >
          &#xe5c4;
        </button>
        <p>Profile</p>
      </div>
      <div className="content">
        <div className="profile-photo-container">
          <div className="photo-container">
            <img src={profile?.profilePhoto || constants.PHOTOURL}
              id="profilePhoto" className="photo" alt="profile"
            />
          </div>
          <label>
            <input
              onChange={event =>
                addPhotoFilePicker(event, dispatch, setToasterIsOpen)
              }
              type="file"
              id="addProfileFilePicker"
              accept="image/*"
            />
            <span className="photo-icon"><i className="fa fa-camera" /></span>
          </label>
        </div>
        <div>
          <div className="input-container">
            <i className="material-icons">&#xe7fd;</i>
            <div>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  onChange={() => setNameButtonIsOpen(true)}
                  placeholder="Add name..."
                  defaultValue={profile?.name}
                />
              </label>
              {nameButtonIsOpen && (
                <button
                  id="nameCheckButton"
                  onClick={() => {
                    updateProfile(dispatch, setToasterIsOpen); setNameButtonIsOpen(false)
                  }}
                >
                  <i className="material-icons">&#xe5ca;</i>
                </button>
              )}
              {!nameButtonIsOpen && (
                <button><i className="material-icons">&#xe3c9;</i></button>
              )}
            </div>
          </div>
          <div className="input-container">
            <i className="material-icons">&#xe88f;</i>
            <div>
              <label>
                <span>About</span>
                <input
                  type="text"
                  id="about"
                  onChange={() => setAboutButtonIsOpen(true)}
                  placeholder="Add about..."
                  defaultValue={profile?.about}
                />
              </label>
              {aboutButtonIsOpen && (
                <button
                  id="aboutCheckButton"
                  onClick={() => {
                    updateProfile(dispatch, setToasterIsOpen); setAboutButtonIsOpen(false)
                  }}
                >
                  <i className="material-icons">&#xe5ca;</i>
                </button>
              )}
              {!aboutButtonIsOpen && (
                <button><i className="material-icons">&#xe3c9;</i></button>
              )}
            </div>
          </div>
          <div className="input-container">
            <i className="material-icons">&#xe0cd;</i>
            <div>
              <label>
                <span>Phone</span>
                <input type="Phone" placeholder="Add phone..."/>
              </label>
              <i className="material-icons">&#xe3c9;</i>
            </div>
          </div>
        </div>
      </div>
      {toasterIsOpen && (
        <div className="toaster">Your profile changed</div>
      )}
    </div>
  )
}

export default ProfilePage

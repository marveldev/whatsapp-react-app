import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homePageActions } from '../homePage/slice'
import { constants } from '../../../common'
import { addPhotoFilePicker, updateProfile } from '../../../common/helpers/profilePage'
import './profilePane.scss'

const ProfilePane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const [nameButtonIsOpen, setNameButtonIsOpen] = useState(null)
  const [aboutButtonIsOpen, setAboutButtonIsOpen] = useState(null)
  const { profile } = useSelector(state => state.profile)
  const { previousPane } = useSelector(state => state.homePage)
  const dispatch = useDispatch()

  return (
    <div className="profile-pane">
      <div className="header">
        <button onClick={() => dispatch(homePageActions.setPane(previousPane))}
          className="material-icons">
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
        <div className="input-container">
          <label>
            <span>Your Name</span>
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
        <div className="input-container">
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
      {toasterIsOpen && (
        <div className="toaster">Your profile changed</div>
      )}
    </div>
  )
}

export default ProfilePane

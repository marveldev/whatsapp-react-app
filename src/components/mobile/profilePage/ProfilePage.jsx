import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../../common'
import { addPhotoFilePicker, updateProfile }
  from '../../../common/helpers/profilePage'
import './profilePage.scss'

const ProfilePage = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const { profile } = useSelector(state => state.profile)
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  return (
    <div className="profile-page">
      <div className="header">
        <button onClick={goBack} className="material-icons">&#xe5c4;</button>
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
              onChange={event => addPhotoFilePicker(event, profile, dispatch)}
              type="file"
              id="addProfileFilePicker"
              accept="image/*"
            />
            <span className="photo-icon"><i className="fa fa-camera"></i></span>
          </label>
        </div>
        <div>
          <div className="input-container">
            <i className="material-icons">&#xe7fd;</i>
            <div>
              <label>
                <span>Name</span>
                <input type="text" id="name"
                  placeholder="Add name..."
                  defaultValue={profile?.name}
                  autoFocus
                />
              </label>
              <i className="material-icons">&#xe3c9;</i>
            </div>
          </div>
          <div className="input-container">
            <i className="material-icons">&#xe88f;</i>
            <div>
              <label>
                <span>About</span>
                <input type="text" id="about"
                  placeholder="Add about..."
                  defaultValue={profile?.about}
                />
              </label>
              <i className="material-icons">&#xe3c9;</i>
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
        <button className="save-button"
          onClick={() => updateProfile(dispatch, setToasterIsOpen)}
        >
          Save
        </button>
      </div>
      {toasterIsOpen && (
        <div className="toaster">Your profile updated</div>
      )}
    </div>
  )
}

export default ProfilePage

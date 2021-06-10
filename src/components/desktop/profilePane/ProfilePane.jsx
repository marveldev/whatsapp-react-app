import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../../common'
import { addPhotoFilePicker, updateProfile }
  from '../../../common/helpers/profilePage'
import { homePageActions } from '../homePage/slice'
import './profilePane.scss'

const ProfilePane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
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
              onChange={event => addPhotoFilePicker(event, profile, dispatch)}
              type="file"
              id="addProfileFilePicker"
              accept="image/*"
            />
            <span className="photo-icon"><i className="fa fa-camera"></i></span>
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Your Name</span>
            <input type="text" id="name"
              placeholder="Add name..."
              defaultValue={profile?.name}
              autoFocus
            />
          </label>
          <i className="material-icons">&#xe3c9;</i>
        </div>
        <div className="input-container">
          <label>
            <span>About</span>
            <input type="text" id="about"
              placeholder="Add about..."
              defaultValue={profile?.about}
            />
          </label>
          <i className="material-icons">&#xe3c9;</i>
        </div>
        <button onClick={() => updateProfile(dispatch, setToasterIsOpen)}
          className="save-button"
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

export default ProfilePane

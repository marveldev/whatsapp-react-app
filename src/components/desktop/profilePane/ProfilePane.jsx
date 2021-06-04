import { useState } from 'react'
import { useSelector } from 'react-redux'
import { constants } from '../../../common'
import './profilePane.scss'

const ProfilePane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const { profile } = useSelector(state => state.profile)

  return (
    <div className="profile-pane">
      <div className="header">
        <button onClick={{}} className="material-icons">&#xe5c4;</button>
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
              onChange={{}}
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
        <button className="save-button">Save</button>
      </div>
      {toasterIsOpen && (
        <div className="toaster">Profile was Successfully added</div>
      )}
    </div>
  )
}

export default ProfilePane

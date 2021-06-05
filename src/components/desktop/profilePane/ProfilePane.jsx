import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../../common'
import database from '../../../database'
import { profileActions } from '../../mobile/profilePage/slice'
import { homePageActions } from '../homePage/slice'
import './profilePane.scss'

const ProfilePane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const { profile } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  const addPhotoFilePicker = event => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      const profilePhoto = photoReader.result
      const newData = {...profile, profilePhoto}
      dispatch(profileActions.setProfile(newData))
    })
  }

  const updateProfile = async () => {
    const name = document.querySelector('#name').value
    const about = document.querySelector('#about').value
    const profilePhoto = document.querySelector('#profilePhoto').src
    const profileObject = {
      name,
      about,
      profilePhoto,
    }

    dispatch(profileActions.setProfile(profileObject))
    setToasterIsOpen(true)
    await database.profile.clear()
    await database.profile.add(profileObject)

    setTimeout(() => {
      setToasterIsOpen(false)
    }, 2000)
  }

  return (
    <div className="profile-pane">
      <div className="header">
        <button onClick={() => dispatch(homePageActions.setCurrentPane('defaultPane'))}
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
              onChange={event => addPhotoFilePicker(event)}
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
        <button onClick={updateProfile} className="save-button">Save</button>
      </div>
      {toasterIsOpen && (
        <div className="toaster">Your profile updated</div>
      )}
    </div>
  )
}

export default ProfilePane

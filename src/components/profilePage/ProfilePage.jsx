import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { profileActions } from './slice'
import './profilePage.scss'

const ProfilePage = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState(false)
  const { profileObject } = useSelector(state => state.profile)
  const [profilePhoto, setProfilePhoto] = useState(profileObject?.profilePhoto)
  const { goBack } = useHistory()
  const dispatch = useDispatch()

  const addPhotoFilePicker = event => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      setProfilePhoto(photoReader.result)
    })
  }

  const updateProfile = () => {
    const name = document.querySelector('#name').value
    const about = document.querySelector('#about').value
    const profileObject = {
      name,
      about,
      profilePhoto,
    }

    dispatch(profileActions.setProfile(profileObject))
    setToasterIsOpen(true)

    setTimeout(() => {
      setToasterIsOpen(false)
    }, 2000)
  }

  return (
    <div className="profile-page">
      <div className="header">
        <button onClick={goBack} className="material-icons">&#xe5c4;</button>
        <p>Profile</p>
      </div>
      <div className="content">
        <div className="profile-photo-container">
          <div className="photo-container">
            <img src={profilePhoto} className="photo" alt="profile" />
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
        <div>
          <div className="input-container">
            <i className="material-icons">&#xe7fd;</i>
            <div>
              <label>
                <span>Name</span>
                <input type="text" id="name" 
                  placeholder="Add name..."
                  defaultValue={profileObject?.name} 
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
                  defaultValue={profileObject?.about}
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
        <button className="save-button" onClick={updateProfile}>Save</button>
      </div>
      {toasterIsOpen && (
        <div className="toaster">Profile was Successfully added</div>
      )}
    </div>
  )
}

export default ProfilePage

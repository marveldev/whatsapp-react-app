import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'
import './profilePage.scss'

const ProfilePage = () => {
  const { goBack } = useHistory()

  return (
    <div className="profile-page">
      <div className="header">
        <button onClick={goBack} className="material-icons">&#xe5c4;</button>
        <p>Profile</p>
      </div>
      <div className="content">
        <div className="profile-photo-container">
          <div className="photo-container">
            <img src={CONSTANTS.PHOTOURL} className="photo" alt="profile" />
          </div>
          <label>
            <input type="file" id="addProfileFilePicker" />
            <span className="photo-icon"><i className="fa fa-camera"></i></span>
          </label>
        </div>
        <div>
          <div className="input-container">
            <i className="material-icons">&#xe7fd;</i>
            <div>
              <label>
                <span>Name</span>
                <input type="text" placeholder="Add name..."/>
              </label>
              <i className="material-icons">&#xe3c9;</i>
            </div>
          </div>
          <div className="input-container">
            <i className="material-icons">&#xe88f;</i>
            <div>
              <label>
                <span>About</span>
                <input type="text" placeholder="Add about..."/>
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
        <div className="button-container">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

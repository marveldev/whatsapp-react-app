import { useState } from 'react'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import './statusGallery.scss'

const StatusGallery = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const { goBack } = useHistory()

  return (
    <div className="status-gallery">
      <div className="header">
        <button onClick={goBack} className="material-icons">&#xe5c4;</button>
        <p>My status</p>
      </div>
      <div className="content">
        <div>
          <div className="single-status-entry">
            <div className="photo-container">
              <img src={constants.PHOTOURL} className="photo" alt="profile" />
            </div>
            <div className="status-info">
              <span>18 views</span>
              <p>Today 06:03</p>
            </div>
            <button onClick={() => setDropdownIsOpen(true)}
              className="dropdown-button"
            >
              <i className="material-icons">&#xe5d4;</i>
            </button>
          </div>
        </div>
        <p className="toaster">Your status updates will disappear after 24 hours.</p>
        <button className="text-icon"><i className="material-icons">&#xe3c9;</i></button>
        <label>
          <input type="file" id="addStatusFilePicker" />
          <span className="photo-icon"><i className="fa fa-camera"></i></span>
        </label>
      </div>
      {dropdownIsOpen && (
        <div onClick={() => setDropdownIsOpen(false)} className="overlay">
          <div className="dropdown">
            <button>Forward</button>
            <button>Share...</button>
            <button>Share to Facebook</button>
            <button>Delete</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default StatusGallery

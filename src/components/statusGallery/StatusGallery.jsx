import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addStatusFilePicker } from '../../common/helper'
import './statusGallery.scss'

const StatusGallery = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const { statusData } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()

  const statusItems = statusData.map((status, index) => (
    <div key={index} id={status.id} className="single-status-entry">
      {status.photoSource && (
        <div className="photo-container">
          <img src={status.photoSource} className="photo" alt="profile" />
        </div>
      )}
      {status.statusInputValue && (
        <div className="text-input"
          style={{backgroundColor: status.backgroundColor, fontFamily: status.fontFamily}}
        >
          {status.statusInputValue}
        </div>
      )}
      <div className="status-info">
        <span>1 views</span>
        <p>Today {status.timeOfEntry}</p>
      </div>
      <button onClick={() => setDropdownIsOpen(true)}
        className="dropdown-button"
      >
        <i className="material-icons">&#xe5d4;</i>
      </button>
    </div>
  ))

  return (
    <div className="status-gallery">
      <div className="header">
        <button onClick={history.goBack} className="material-icons">&#xe5c4;</button>
        <p>My status</p>
      </div>
      <div className="content">
        <div className="status-output">
          {statusItems}
        </div>
        <p className="toaster">Your status updates will disappear after 24 hours.</p>
        <button onClick={() => history.push('/statusTextEntry')} className="text-icon">
          <i className="material-icons">&#xe3c9;</i>
        </button>
        <label>
          <input
            onChange={event => addStatusFilePicker(event, dispatch)}
            type="file" 
            id="addStatusFilePicker"
            accept="image/*"
            multiple
          />
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

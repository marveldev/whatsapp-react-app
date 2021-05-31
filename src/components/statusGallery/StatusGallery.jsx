import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addStatusFilePicker } from '../../common/helper'
import { statusActions } from '../statusPage/slice'
import './statusGallery.scss'

const StatusGallery = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState()
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const [selectedStatusIndex, setSelectedStatusIndex] = useState()
  const { statusData } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteStatus = () => {
    const mutableStatusData = [...statusData]
    mutableStatusData.splice(selectedStatusIndex, 1)
    dispatch(statusActions.addMultipleStatus(mutableStatusData))
    statusData.length <= 1 && history.push('/')
  }

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
      <button onClick={() => {setDropdownIsOpen(true); setSelectedStatusIndex(index)}}
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
            <button onClick={() => setDeleteModalIsOpen(true)}>Delete</button>
          </div>
        </div>
      )}
      {deleteModalIsOpen && (
        <div onClick={() => setDeleteModalIsOpen(false)} className="overlay">
          <div className="delete-modal">
            <p>Delete this status update? It will
              also be deleted for everyone who received it.
            </p>
            <button>CANCEL</button>
            <button onClick={deleteStatus}>DELETE</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatusGallery

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { statusActions } from '../../data/statusSlice'
import database from '../../../database'

const StatusGallery = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const [selectedStatusIndex, setSelectedStatusIndex] = useState()
  const { statusData } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteStatus = async () => {
    const mutableStatusData = [...statusData]
    mutableStatusData.splice(selectedStatusIndex, 1)
    dispatch(statusActions.addMultipleStatus(mutableStatusData))
    await database.status.delete(statusData[selectedStatusIndex].id)
  }

  const displayStatus = index => {
    dispatch(statusActions.setStatusIndex(index))
    history.push('/viewStatus')
  }

  const statusItems = statusData.map((status, index) => (
    <div key={index} id={status.id} className="single-status-entry">
      <div onClick={() => displayStatus(index)}>
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
      </div>
      <div className="status-info">
        <span>1 views</span>
        <button onClick={() => {setDeleteModalIsOpen(true); setSelectedStatusIndex(index)}}
          className="fa fa-trash-o"
        >
        </button>
        <p>today at {status.timeOfEntry}</p>
      </div>
    </div>
  ))

  return (
    <div className="desktop-status-gallery">
      <button onClick={history.goBack} className="material-icons close-button">&#xe5cd;</button>
      {statusData.length < 1 && (
        <div className="status-message">
          No status gallery yet.
        </div>
      )}
      {statusData.length >= 1 && (
        <div className="status-output-container">
          <h4>View your updates</h4>
          <div>
            {statusItems}
          </div>
          <p className="toaster">Your status updates will disappear after 24 hours.</p>
        </div>
      )}
      {deleteModalIsOpen && (
        <div onClick={() => setDeleteModalIsOpen(false)} className="modal-overlay">
          <div className="delete-modal">
            <p>Delete this status update? It will
              also be deleted for everyone who received it.
            </p>
            <button>CANCEL</button>
            <button onClick={deleteStatus} className="delete-button">DELETE</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatusGallery

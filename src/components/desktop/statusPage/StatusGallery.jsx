import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const StatusGallery = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const { statusData } = useSelector(state => state.status)
  const { goBack } = useHistory()

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
        <button onClick={() => setDeleteModalIsOpen(true)}
          className="fa fa-trash-o"
        >
        </button>
        <p>today at {status.timeOfEntry}</p>
      </div>
    </div>
  ))

  return (
    <div className="desktop-status-gallery">
      <button onClick={goBack} className="material-icons close-button">&#xe5cd;</button>
      {!statusData && (
        <div className="status-message">
          No status gallery yet.
        </div>
      )}
      {statusData && (
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
            <button onClick={{}} className="delete-button">DELETE</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatusGallery

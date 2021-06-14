import { useState } from 'react'
import { useSelector } from 'react-redux'

const StatusGallery = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState()
  const { statusData } = useSelector(state => state.status)

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
        <button className="fa fa-trash-o"></button>
        <p>today at {status.timeOfEntry}</p>
      </div>
    </div>
  ))

  return (
    <div className="desktop-status-gallery">
      <button className="material-icons close-button">&#xe5cd;</button>
      <div className="status-message">
        No status gallery yet.
      </div>
      <div>
        <h4>View your updates</h4>
        <div className="status-output-container">
          {statusItems}
        </div>
        <p className="toaster">Your status updates will disappear after 24 hours.</p>
      </div>
      {deleteModalIsOpen && (
        <div onClick={() => setDeleteModalIsOpen(false)} className="modal-overlay">
          <div className="delete-modal">
            <p>Delete this status update? It will
              also be deleted for everyone who received it.
            </p>
            <button>CANCEL</button>
            <button onClick={{}}>DELETE</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatusGallery

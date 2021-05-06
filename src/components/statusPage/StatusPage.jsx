import './statusPage.scss'

const StatusPage = () => {
  return (
    <div className="status-page">
      <div>
        <input type="file" id="addStatusFilePicker" />
        <label className="add-status-container"
          htmlFor="addStatusFilePicker" role="button" tabIndex="0"
        >
          <div className="photo-container">
            <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="photo" alt="profile" />
          </div>
          <span className="material-icons plus-icon">&#xe145;</span>
          <div className="status-message">
            <span>My status</span>
            <p>Tap to add status update</p>
          </div>
        </label>
        <div className="view-status-container" role="button" tabIndex="0">
          <div className="photo-container">
            <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="photo" alt="profile" />
          </div>
          <div></div>
          <div className="status-message">
            <span>My status</span>
            <p>Tap to view status update</p>
          </div>
          <button className="more-button"><i className="material-icons">&#xe5d3;</i></button>
        </div>
      </div>
      <button className="text-icon"><i className="material-icons">&#xe3c9;</i></button>
      <label htmlFor="addStatusFilePicker">
        <span className="photo-icon"><i className="fa fa-camera"></i></span>
      </label>
    </div>
  )
}

export default StatusPage

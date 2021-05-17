import { useHistory } from 'react-router'
import { CONSTANTS } from '../../common/constants'
import './statusPage.scss'

const StatusPage = () => {
  const history = useHistory()

  return (
    <div className="status-page">
      <div>
        <input type="file" id="addStatusFilePicker" />
        <label className="add-status-container"
          htmlFor="addStatusFilePicker" role="button" tabIndex="0"
        >
          <div className="photo-container">
            <img src={CONSTANTS.PHOTOURL} className="photo" alt="profile" />
          </div>
          <span className="material-icons plus-icon">&#xe145;</span>
          <div className="status-message">
            <span>My status</span>
            <p>Tap to add status update</p>
          </div>
        </label>
        <div
          onClick={() => history.push('/viewStatusEntry')}
          className="view-status-container" role="button" tabIndex="0"
        >
          <div className="photo-container">
            <img src={CONSTANTS.PHOTOURL} className="photo" alt="profile" />
          </div>
          <div></div>
          <div className="status-message">
            <span>My status</span>
            <p>Tap to view status update</p>
          </div>
          <button onClick={(event) => {event.stopPropagation(); history.push('/statusGallery')}}
            className="more-button"
          >
            <i className="material-icons">&#xe5d3;</i>
          </button>
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

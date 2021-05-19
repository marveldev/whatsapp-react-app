import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import { statusActions } from './slice'
import './statusPage.scss'

const StatusPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { statusData } = useSelector(state => state.status)
  const lastStatusEntry = statusData[statusData.length - 1]
  const textStyleObject = {
    backgroundColor: lastStatusEntry?.backgroundColor,
    fontFamily: lastStatusEntry?.fontFamily
  }

  const addStatusFilePicker = event => {
    const id = 'id' + Date.parse(new Date()).toString()
    const timeOfEntry = new Date().toLocaleString('en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )
    const photoReader = new FileReader()
    photoReader.readAsDataURL(event.target.files[0])
    photoReader.addEventListener('load', () => {
      const statusObject = {
        id,
        timeOfEntry,
        photoSource: photoReader.result,
      }

      dispatch(statusActions.addStatus(statusObject))
    })
  }

  return (
    <div className="status-page">
      <div>
        <input
          type="file"
          id="addStatusFilePicker"
          accept="image/*"
          onChange={(event) => addStatusFilePicker(event)}
        />
        {statusData.length < 1 && (
          <label className="add-status-container"
            htmlFor="addStatusFilePicker" role="button" tabIndex="0"
          >
            <div className="photo-container">
              <img src={constants.PHOTOURL} className="photo" alt="profile" />
            </div>
            <span className="material-icons plus-icon">&#xe145;</span>
            <div className="status-message">
              <span>My status</span>
              <p>Tap to add status update</p>
            </div>
          </label>
        )}
        {statusData.length >= 1 && (
          <div
            onClick={() => history.push('/viewStatusEntry')}
            className="view-status-container" role="button" tabIndex="0"
          >
            {lastStatusEntry?.photoSource && (
              <div className="photo-container">
                <img src={lastStatusEntry.photoSource}
                  className="photo" alt="profile"
                />
              </div>
            )}
            {lastStatusEntry?.statusInputValue && (
              <div className="text-input" style={textStyleObject}>
                {lastStatusEntry.statusInputValue}
              </div>
            )}
            <div className="status-message">
              <span>My status</span>
              <p>Tap to view status update</p>
            </div>
            <button
              onClick={(event) => {
                event.stopPropagation(); history.push('/statusGallery')
              }}
              className="more-button"
            >
              <i className="material-icons">&#xe5d3;</i>
            </button>
          </div>
        )}
      </div>
      <button onClick={() => history.push('/statusTextEntry')} className="text-icon">
        <i className="material-icons">&#xe3c9;</i>
      </button>
      <label htmlFor="addStatusFilePicker">
        <span className="photo-icon"><i className="fa fa-camera"></i></span>
      </label>
    </div>
  )
}

export default StatusPage

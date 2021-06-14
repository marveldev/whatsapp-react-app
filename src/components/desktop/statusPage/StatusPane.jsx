import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../../common'
import { addStatusFilePicker } from '../../../common/helpers/statusPage'

const StatusPane = () => {
  const { profile } = useSelector(state => state.profile)
  const { statusData } = useSelector(state => state.status)
  const dispatch = useDispatch()

  const lastStatusEntry = statusData[statusData.length - 1]
  const textStyleObject = {
    backgroundColor: lastStatusEntry?.backgroundColor,
    fontFamily: lastStatusEntry?.fontFamily
  }

  return (
    <div className="status-pane">
      <div>
        {statusData.length < 1 && (
          <label className="add-status-container"
            htmlFor="addStatusFilePicker" role="button" tabIndex="0"
          >
            <div className="photo-container">
              <img src={profile?.profilePhoto || constants.PHOTOURL}
                className="photo" alt="profile"
              />
            </div>
            <span className="material-icons plus-icon">&#xe145;</span>
            <div className="status-message">
              <p>My Status</p>
              <span>Tap to add status update</span>
            </div>
          </label>
        )}
        {statusData.length >= 1 && (
          <div
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
              <p>My Status</p>
              <span>Tap to view status update</span>
            </div>
          </div>
        )}
      </div>
      <button className="text-icon">
        <i className="material-icons">&#xe3c9;</i>
      </button>
      <label htmlFor="addStatusFilePicker">
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
  )
}

export default StatusPane

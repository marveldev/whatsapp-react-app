import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { statusActions } from '../../data/statusSlice'
import { constants } from '../../../common'
import { addStatusFilePicker } from '../../../common/helpers/statusPage'
import database from '../../../database'
import './statusPage.scss'

const StatusPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.profile)
  const { statusData } = useSelector(state => state.status)
  const lastStatusEntry = statusData[statusData.length - 1]
  const textStyleObject = {
    backgroundColor: lastStatusEntry?.backgroundColor,
    fontFamily: lastStatusEntry?.fontFamily
  }

  useEffect(() => {
    statusData.map(async ({storedTime, id}) => {
      const timeDifference = (new Date().getTime() - storedTime)
      const statusDuration = Math.floor(timeDifference/1000/60/60)
      if (statusDuration >= '24') {
        await database.status.delete(id)
      }
    })
  
    dispatch(statusActions.setUserIsReloading(false))
  }, [statusData, dispatch])
  
  const displayStatus = () => {
    dispatch(statusActions.setStatusIndex(0))
    history.push('/viewStatusEntry')
  }

  return (
    <div className="status-page">
      <div>
        <input
          onChange={event => addStatusFilePicker(event, dispatch)}
          type="file"
          id="addStatusFilePicker"
          accept="image/*"
          multiple
        />
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
              <span>My status</span>
              <p>Tap to add status update</p>
            </div>
          </label>
        )}
        {statusData.length >= 1 && (
          <div
            onClick={displayStatus}
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
        <span className="photo-icon"><i className="fa fa-camera" /></span>
      </label>
    </div>
  )
}

export default StatusPage

import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import { statusActions } from '../statusPage/slice'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { profileObject } = useSelector(state => state.profile)
  const { statusData, currentStatusIndex } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()
  const [stuff, setStuff] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (stuff < statusData.length - 1) setStuff(stuff + 1)
      else {
        setStuff(0)
        history.push('/')
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [stuff, history, statusData, dispatch])

  const displayNextStatus = () => {
    if (currentStatusIndex === statusData.length - 1) {
      dispatch(statusActions.setCurrentStatusIndex(0))
    } else {
      dispatch(statusActions.setCurrentStatusIndex(currentStatusIndex + 1))
    }
  }

  const displayPreviousStatus = () => {
    if (currentStatusIndex === 0) {
      dispatch(statusActions.setCurrentStatusIndex(statusData.length - 1))
    } else {
      dispatch(statusActions.setCurrentStatusIndex(currentStatusIndex - 1))
    }
  }

  return (
    <div className="view-status-entry">
      <div className="header">
        <div className="bar-container">
          {statusData.map((item, index) => (
            <div key={index} className="progress-bar">
              <div className="bar"></div>
            </div>
          ))}
        </div>
        <div onClick={history.goBack} className="user-profile">
          <button className="material-icons">&#xe5c4;</button>
          <div className="photo-container">
            <img src={profileObject?.profilePhoto || constants.PHOTOURL}
              className="photo" alt="profile"
            />
          </div>
          <div className="info">
            <p>My status</p>
            <span>Today, 06:03 AM</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="status-entry-container">
          <img src={statusData[stuff]?.photoSource} alt="status" />
        </div>
        <button onClick={displayPreviousStatus} className="previous-button">previous</button>
        <button onClick={displayNextStatus} className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

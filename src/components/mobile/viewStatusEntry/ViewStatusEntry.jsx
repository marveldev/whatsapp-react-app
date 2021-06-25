import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import parse from 'html-react-parser'
import { constants } from '../../../common'
import { statusActions } from '../../data/statusSlice'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { profile } = useSelector(state => state.profile)
  const { statusData, statusIndex, userIsReloading } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()
  const intervalRef = useRef(null)
  
  useEffect(() => {
    if (userIsReloading) {
      history.push('/')
    }

    let width = 1
    const statusBars = document.querySelectorAll('.bar')
    statusBars.forEach((statusBar, index) => {
      if (index < statusIndex) {
        statusBar.style.width = 100 + '%'
      } else {
        statusBar.style.width = 0 + '%'
      }
    })

    intervalRef.current = setInterval(() => {
      if (width < 100 && statusBars[statusIndex]) {
        width++
        statusBars[statusIndex].style.width = width + '%'
      }
    }, 30)

    const timeout = setTimeout(() => {
      if (statusIndex < statusData.length - 1) {
        dispatch(statusActions.setStatusIndex(statusIndex + 1))
      }
      else {
        clearInterval(intervalRef.current)
        history.goBack()
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [statusIndex, history, statusData, dispatch, userIsReloading])
  
  const displayNextStatus = () => {
    clearInterval(intervalRef.current)
    if (statusIndex === statusData.length - 1) {
      history.goBack()
    } else {
      dispatch(statusActions.setStatusIndex(statusIndex + 1))
    }
  }
  
  const displayPreviousStatus = () => {
    clearInterval(intervalRef.current)
    if (statusIndex === 0) {
      history.goBack()
    } else {
      dispatch(statusActions.setStatusIndex(statusIndex - 1))
    }
  }

  const statusTextStyle = {
    backgroundColor: statusData[statusIndex]?.backgroundColor,
    fontFamily: statusData[statusIndex]?.fontFamily
  }

  return (
    <div className="view-status-entry">
      <div className="header">
        <div className="bar-container">
          {statusData.map((item, index) => (
            <div key={index} className="progress-bar">
              <div className="bar" />
            </div>
          ))}
        </div>
        <div onClick={history.goBack} className="user-profile">
          <button className="material-icons">&#xe5c4;</button>
          <div className="photo-container">
            <img src={profile?.profilePhoto || constants.PHOTOURL}
              className="photo" alt="profile"
            />
          </div>
          <div className="info">
            <p>My status</p>
            <span>Today, {statusData[statusIndex]?.timeOfEntry}</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="status-entry-container">
          {statusData[statusIndex]?.photoSource && (
            <img src={statusData[statusIndex]?.photoSource} alt="status" />
          )}
          {statusData[statusIndex]?.statusInputValue && (
            <div className="text-input" style={statusTextStyle}>
              <p>{parse(statusData[statusIndex]?.statusInputValue)}</p>
            </div>
          )}
        </div>
        <button onClick={displayPreviousStatus} className="previous-button">previous</button>
        <button onClick={displayNextStatus} className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

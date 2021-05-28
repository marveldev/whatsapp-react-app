import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { profile } = useSelector(state => state.profile)
  const { statusData } = useSelector(state => state.status)
  const [statusIndex, setStatusIndex] = useState(0)
  const history = useHistory()
  const interval = useRef()
  const statusBar = useRef()

  useEffect(() => {
    let width = 1
    const statusBars = document.querySelectorAll('.bar')
    statusBar.current = statusBars[statusIndex]
    interval.current = setInterval(() => {
      if (width < 100) {
        width++
        statusBar.current.style.width = width + '%'
      }
    }, 20)

    const timeout = setTimeout(() => {
      if (statusIndex < statusData.length - 1) {
        setStatusIndex(statusIndex + 1)
      }
      else {
        setStatusIndex(0)
        clearInterval(interval.current)
        history.push('/')
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [statusIndex, history, statusData])

  const displayNextStatus = () => {
    clearInterval(interval.current)
    statusBar.current.style.width = 100 + '%'
    if (statusIndex === statusData.length - 1) {
      setStatusIndex(0)
      history.push('/')
    } else {
      setStatusIndex(statusIndex + 1)
    }
  }

  const displayPreviousStatus = () => {
    clearInterval(interval.current)
    statusBar.current.style.width = 1 + '%'
    if (statusIndex === 0) {
      setStatusIndex(0)
      history.push('/')
    } else {
      setStatusIndex(statusIndex - 1)
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
            <img src={profile?.profilePhoto || constants.PHOTOURL}
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
          <img src={statusData[statusIndex]?.photoSource} alt="status" />
        </div>
        <button onClick={displayPreviousStatus} className="previous-button">previous</button>
        <button onClick={displayNextStatus} className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

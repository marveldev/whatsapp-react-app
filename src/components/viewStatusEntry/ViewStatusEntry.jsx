import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import { statusActions } from '../statusPage/slice'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { statusData, currentStatusIndex } = useSelector(state => state.status)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const statusBars = document.querySelectorAll('.bar')
    statusBars.forEach((statusBar, index) => {
      let width = 1
      const delay = (index*3000)
      const incrementWidth = () => {
        const interval = setInterval(() => {
          if (width >= 100 && index === statusBars.length - 1) {
            clearInterval(interval)
            dispatch(statusActions.setCurrentStatusIndex(0))
            history.push('/')
          } else {
            width++
            statusBar.style.width = width + '%'
          }
        }, 30)
      }

      setTimeout(incrementWidth, delay)
    })
  }, [currentStatusIndex, dispatch, history])

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
            <img src={constants.PHOTOURL} className="photo" alt="profile" />
          </div>
          <div className="info">
            <p>My status</p>
            <span>Today, 06:03 AM</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="status-entry-container">
          <img src={statusData[currentStatusIndex]?.photoSource} alt="status" />
        </div>
        <button onClick={displayPreviousStatus} className="previous-button">previous</button>
        <button onClick={displayNextStatus} className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

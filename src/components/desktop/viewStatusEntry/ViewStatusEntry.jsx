import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import parse from 'html-react-parser'
import { statusActions } from '../../data/statusSlice'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { status } = useSelector(state => state)
  const { statusData, statusIndex, userIsReloading } = status
  const dispatch = useDispatch()
  const history = useHistory()
  const intervalRef = useRef(null)

  useEffect(() => {
    if (userIsReloading) {
      history.push('/status')
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
    <div className="desktop-view-status-entry">
      <div className="background-entry"
        style={{backgroundColor: statusData[statusIndex]?.backgroundColor,
          backgroundImage: `url(${statusData[statusIndex]?.photoSource})`}
        }
      />
      <div className="left-overlay" />
      <div className="right-overlay" />
      <div className="content">
        <div className="bar-container">
          {statusData.map((item, index) => (
            <div key={index} className="progress-bar">
              <div className="bar" />
            </div>
          ))}
        </div>
        <div className="info">
          <p>You</p>
          <span>today at {statusData[statusIndex]?.timeOfEntry}</span>
        </div>
        <button onClick={history.goBack}
          className="material-icons back-button"
        >
          &#xe5c4;
        </button>
        <button onClick={() => history.push('/')}
          className="material-icons close-button"
        >
          &#xe5cd;
        </button>
        <button onClick={displayPreviousStatus}
          className="material-icons previous-button"
        >
          &#xe314;
        </button>
        <button onClick={displayNextStatus}
          className="material-icons next-button"
        >
          &#xe315;
        </button>
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
      </div>
    </div>
  )
}

export default ViewStatusEntry

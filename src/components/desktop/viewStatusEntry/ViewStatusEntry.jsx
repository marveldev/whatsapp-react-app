import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const [statusIndex, setStatusIndex] = useState(0)
  const { statusData } = useSelector(state => state.status)
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
    }, 30)

    const timeout = setTimeout(() => {
      if (statusIndex < statusData.length - 1) {
        setStatusIndex(statusIndex + 1)
      }
      else {
        clearInterval(interval.current)
        history.goBack()
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [statusIndex, history, statusData])

  const displayNextStatus = () => {
    clearInterval(interval.current)
    statusBar.current.style.width = 100 + '%'
    if (statusIndex === statusData.length - 1) {
      history.goBack()
    } else {
      setStatusIndex(statusIndex + 1)
    }
  }

  const displayPreviousStatus = () => {
    clearInterval(interval.current)
    statusBar.current.style.width = 0 + '%'
    if (statusIndex === 0) {
      history.goBack()
    } else {
      setStatusIndex(statusIndex - 1)
    }
  }

  const statusTextStyle = {
    backgroundColor: statusData[statusIndex]?.backgroundColor,
    fontFamily: statusData[statusIndex]?.fontFamily
  }

  return (
    <div className="desktop-view-status-entry">
      <div className="bar-container">
        {statusData.map((item, index) => (
          <div key={index} className="progress-bar">
            <div className="bar"></div>
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
            {statusData[statusIndex]?.statusInputValue}
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewStatusEntry

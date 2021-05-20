import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { constants } from '../../common'
import { statusActions } from '../statusPage/slice'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { statusData, currentStatusIndex } = useSelector(state => state.status)
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar')
    console.log(progressBars);
    // let interval
    // for (let index = 0; index < bars.length; index++) {
    //   const bar = bars[index]
    //   let width = 1
    //   setInterval(() => {
    //     if (width >= 100) {

    //     } else {
    //       width++
    //       bar.style.width = width + '%'
    //     }
    //   }, 30)
    // }
  }, [])

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
        <div>
          {statusData.map((item, index) => (
            <div key={index} className="progress-bar">
              <div className="bar"></div>
            </div>
          ))}
        </div>
        <div onClick={goBack} className="user-profile">
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
          {/* <img src={statusData[currentStatusIndex]?.photoSource} alt="status" /> */}
        </div>
        <button onClick={displayPreviousStatus} className="previous-button">previous</button>
        <button onClick={displayNextStatus} className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

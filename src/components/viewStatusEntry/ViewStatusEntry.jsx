import { useHistory } from 'react-router'
import { constants } from '../../common'
import './viewStatusEntry.scss'

const ViewStatusEntry = () => {
  const { goBack } = useHistory()

  return (
    <div className="view-status-entry">
      <div className="header">
        <div className="progress-bar"><div className="bar"></div></div>
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
          <img src={constants.PHOTOURL} alt="status" />
        </div>
        <button className="previous-button">previous</button>
        <button className="next-button">next</button>
      </div>
    </div>
  )
}

export default ViewStatusEntry

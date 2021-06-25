import { useHistory } from 'react-router-dom'
import { constants } from '../../../common'
import './chatPage.scss'

const ChatPhotoPreview = () => {
  const history = useHistory()
  
  return (
    <div className="chat-photo-preview">
      <button className="back-button" onClick={history.goBack}>
        <i className="material-icons">&#xe5c4;</i>
      </button>
      <img src={constants.PHOTOURL} alt="chatPhoto" />
      <input type="text" placeholder="Add a caption"/>
      <button className="send-button">
        <i className="material-icons">&#xe163;</i>
      </button>
    </div>
  )
}

export default ChatPhotoPreview

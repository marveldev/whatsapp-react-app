import { useSelector, useDispatch } from 'react-redux'
import { chatActions } from '../../data/chatSlice'
import database from '../../../database'
import './chatPage.scss'

const ChatPhotoPreview = () => {
  const { chatPhoto, chatInputValue } = useSelector(state => state.chat)
  const { selectedContact } = useSelector(state => state.homePage)
  const dispatch = useDispatch()
  
  const addMessageEvent = async person => {
    const id = 'id' + Date.parse(new Date()).toString()
     const chatTime = new Date().toLocaleString('en-US',
     { hour: 'numeric', minute: 'numeric', hour12: true }
     )

    const chatObject = {
      id,
      person,
      chatTime,
      chatInputValue,
      contactId: selectedContact.id,
      chatPhoto,
      selected: false
    }

    dispatch(chatActions.addChat(chatObject))
    dispatch(chatActions.setChatInputValue(''))
    dispatch(chatActions.setChatPhoto(null))
    await database.chat.add(chatObject)
  }
  
  return (
    <div className="chat-photo-preview">
      <div className="photo-preview-header">
        <button className="back-button"
          onClick={() => dispatch(chatActions.setChatPhoto(null))}
        >
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <span>Preview</span>
      </div>
      <img src={chatPhoto} alt="chatPhoto" />
      <input type="text" placeholder="Add a caption"
        value={chatInputValue}
        onChange={event => dispatch(chatActions.setChatInputValue(event.target.value))}
      />
      <div className="persons-button-container">
        <button
          onClick={() => addMessageEvent('person-one')}
          className="person-one"
        >
          Person1
        </button>
        <button
          onClick={() => addMessageEvent('person-two')}
          className="person-two"
        >
          Person2
        </button>
      </div>
    </div>
  )
}

export default ChatPhotoPreview

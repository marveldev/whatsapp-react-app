import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import contactList from '../contactListPage/contactList'
import { chatActions } from '../../data/chatSlice'
import database from '../../../database'
import './chatPage.scss'

const ChatPhotoPreview = () => {
  const { chatPhoto, chatInputValue } = useSelector(state => state.chat)
  const { selectedContactIndex } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  
  const contactId = contactList[selectedContactIndex].id
  
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
      contactId,
      chatPhoto,
      selected: false
    }
    
    dispatch(chatActions.addChat(chatObject))
    dispatch(chatActions.setChatInputValue(''))
    await database.chat.put(chatObject)
    history.goBack()
  }
  
  return (
    <div className="chat-photo-preview">
      <div className="header">
        <button className="back-button" onClick={history.goBack}>
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

import { chatActions } from '../../components/data/chatSlice'
import database from '../../database'

const displaySendButton = (event, setSendButtonIsActive) => {
  const chatBox = event.target
  chatBox.style.height = "1px"
  chatBox.style.height = (3+chatBox.scrollHeight)+"px"
  if (chatBox.value.trim().length >= 1) {
    setSendButtonIsActive(true)
  } else {
    setSendButtonIsActive(false)
  }
}

const addMessageToDom = async (person, selectedContact, dispatch) => {
  const chatContainer = document.querySelector('.chat-output-container')
  const chatInput = document.querySelector('.chat-input')
  const id = 'id' + Date.parse(new Date()).toString()
  const chatTime = new Date().toLocaleString('en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )

  const chatObject = {
    id,
    person,
    chatTime,
    chatInputValue: chatInput.value,
    contactId: selectedContact.id,
    selected: false
  }

  await database.chat.add(chatObject)
  chatContainer.scrollTop = chatContainer.scrollHeight
  chatInput.style.height = ''
  dispatch(chatActions.addChat(chatObject))
  chatInput.focus()
}

export { displaySendButton, addMessageToDom }

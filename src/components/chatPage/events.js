import { chatActions } from './slice'

const displaySendButton = (selector, setSendButtonIsActive) => {
  const element = document.querySelector(selector)
  element.style.height = "1px"
  element.style.height = (3+element.scrollHeight)+"px"
  if (element.value.trim().length >= 1) {
    setSendButtonIsActive(true)
  } else {
    setSendButtonIsActive(false)
  }
}

const addChatItemToDom = (selector, person, dispatch) => {
  const chatInputValue = document.querySelector(selector).value
  const id = 'id' + Date.parse(new Date()).toString()
  const chatTime = new Date().toLocaleString('en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )

  const chatObject = {
    id,
    person,
    chatTime,
    chatInputValue
  }

  dispatch(chatActions.addChat(chatObject))
}

export { displaySendButton, addChatItemToDom }

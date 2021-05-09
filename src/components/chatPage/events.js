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


export { displaySendButton }

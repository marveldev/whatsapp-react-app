import { statusActions } from '../components/statusPage/slice'

const addStatusFilePicker = (event, dispatch) => {
  const id = 'id' + Date.parse(new Date()).toString()
  const timeOfEntry = new Date().toLocaleString('en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )
  const photoReader = new FileReader()
  photoReader.readAsDataURL(event.target.files[0])
  photoReader.addEventListener('load', () => {
    const statusObject = {
      id,
      timeOfEntry,
      photoSource: photoReader.result,
    }

    dispatch(statusActions.addStatus(statusObject))
  })
}

export { addStatusFilePicker }

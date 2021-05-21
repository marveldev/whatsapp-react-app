import { statusActions } from '../components/statusPage/slice'

const addStatusFilePicker = (event, dispatch) => {
  const id = 'id' + Date.parse(new Date()).toString()
  const timeOfEntry = new Date().toLocaleString('en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )

  const files = event.target.files
  if (files.length <= 5) {
    for (let index = 0; index < files.length; index++) {
      const photoReader = new FileReader()
      photoReader.readAsDataURL(files[index])
      photoReader.addEventListener('load', () => {
        const statusObject = {
          id,
          timeOfEntry,
          photoSource: photoReader.result,
        }

        dispatch(statusActions.addStatus(statusObject))
      })
    }
  } else {
    alert("length exceeded; select a maximum of five images only")
  }
}

export { addStatusFilePicker }

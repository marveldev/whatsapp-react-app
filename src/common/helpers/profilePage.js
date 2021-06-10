import { profileActions } from '../../components/data/profileSlice'
import database from '../../database'

const addPhotoFilePicker = (event, profile, dispatch) => {
  const photoReader = new FileReader()
  photoReader.readAsDataURL(event.target.files[0])
  photoReader.addEventListener('load', () => {
    const profilePhoto = photoReader.result
    const newData = {...profile, profilePhoto}
    dispatch(profileActions.setProfile(newData))
  })
}

const updateProfile = async (dispatch, setToasterIsOpen) => {
  const name = document.querySelector('#name').value
  const about = document.querySelector('#about').value
  const profilePhoto = document.querySelector('#profilePhoto').src
  const profileObject = {
    name,
    about,
    profilePhoto,
  }

  dispatch(profileActions.setProfile(profileObject))
  setToasterIsOpen(true)
  await database.profile.clear()
  await database.profile.add(profileObject)

  setTimeout(() => {
    setToasterIsOpen(false)
  }, 2000)
}

export { addPhotoFilePicker, updateProfile }

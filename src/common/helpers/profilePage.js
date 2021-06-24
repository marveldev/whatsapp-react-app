import { profileActions } from '../../components/data/profileSlice'
import database from '../../database'

const updateProfile = async (dispatch, setToasterIsOpen, photoUrl) => {
  const name = document.querySelector('#name').value
  const about = document.querySelector('#about').value
  const profilePhoto = photoUrl || document.querySelector('#profilePhoto').src
  const profileData = { name, about, profilePhoto }
  dispatch(profileActions.setProfile(profileData))
  setToasterIsOpen(true)
  await database.profile.clear()
  await database.profile.add(profileData)

  setTimeout(() => {
    setToasterIsOpen(false)
  }, 2000)
}

const addPhotoFilePicker = (event, dispatch, setToasterIsOpen) => {
  const photoReader = new FileReader()
  photoReader.readAsDataURL(event.target.files[0])
  photoReader.addEventListener('load', async () => {
    const photoUrl = photoReader.result
    await updateProfile(dispatch, setToasterIsOpen, photoUrl)
  })
}

export { addPhotoFilePicker, updateProfile }

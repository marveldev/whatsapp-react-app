import { statusActions } from '../../components/data/statusSlice'
import database from '../../database'

const addStatusFilePicker = (event, dispatch) => {
  const storedTime = new Date().getTime()
  const timeOfEntry = new Date().toLocaleString('en-US',
    { hour: 'numeric', minute: 'numeric', hour12: true }
  )

  const files = event.target.files
  if (files.length <= 5) {
    for (let index = 0; index < files.length; index++) {
      const id = 'id' + Date.parse(new Date()).toString() + index
      const photoReader = new FileReader()
      photoReader.readAsDataURL(files[index])
      photoReader.addEventListener('load', async () => {
        const statusObject = {
          id,
          timeOfEntry,
          storedTime,
          photoSource: photoReader.result,
        }

        dispatch(statusActions.addStatus(statusObject))
        await database.status.add(statusObject)
      })
    }
  } else {
    alert("length exceeded; select a maximum of five images only")
  }
}

const changeFontfamily = (fontFamily, setFontFamily) => {
  const fontFamilyList = [
    "Courier New", "Zapf-Chancery", "Verdana", "sans-serif",
    "Times New Roman", "Courier", "Arial Narrow", "Candara", "fangsong",
    "Calibri", "Garamond", "cursive", "Optima", "monospace", "fantasy",
  ]

  let index = fontFamilyList.indexOf(fontFamily) + 1
  if (index === fontFamilyList.length) index = 0
  setFontFamily(fontFamilyList[index])
}

const changeBackgroundColor = setBackgroundColor => {
  let randomColor = '#'
  for (let index = 0; index < 6; index++) {
    randomColor += Math.floor(Math.random() * 10)
  }

  setBackgroundColor(randomColor)
}

export { addStatusFilePicker, changeFontfamily, changeBackgroundColor }

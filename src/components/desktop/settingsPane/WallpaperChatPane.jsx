import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homePageActions } from '../homePage/slice'
import { chatActions } from '../../data/chatSlice'
import database from '../../../database'
import './settingsPane.scss'

const WallpaperChatPane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState()
  const { selectedWallpaper, doodleIsChecked } = useSelector(state => state.chat)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  const  lightThemeColors = [
    '#E4DDD4', '#bbe4e5', '#AFD8C6', '#7BCAA5', '#CADBEC', '#67D2D4',
    '#63BCCE', '#D6D0F0', '#CECFCF', '#D1DABE', '#E6E0B0', '#FFEEA9',
    '#FED297', '#FC6669', '#FA4669', '#932140', '#DD6F4F', '#644D52',
    '#517F7F', '#FC9B9B'
  ]

  const  darkThemeColors = [
    '#0C1419', '#0F2525', '#13261E', '#11241C', '#101F27', '#0F2224',
    '#0F2025', '#1E1C25', '#212121', '#1F211C', '#22231A', '#262419',
    '#271E17', '#261616', '#270E10', '#260A10', '#19040A', '#20100D',
    '#0E0D0C', '#101919'
  ]

  const colorArray = theme === 'Dark' ? darkThemeColors : lightThemeColors

  const handleHoverEvent = background => {
    if (doodleIsChecked) {
      const chatBackground = {background, opacity: 0.3}
      dispatch(chatActions.setChatWallpaper(chatBackground))
    } else {
      const chatBackground = {background, opacity: 1}
      dispatch(chatActions.setChatWallpaper(chatBackground))
    }
  }

  const changeChatWallpaper = async background => {
    dispatch(chatActions.setSelectedWallpaper(background))
    setToasterIsOpen(true)
    await database.chatWallpaper.clear()
    await database.chatWallpaper.add({background})

    setTimeout(() => {
      setToasterIsOpen(false)
    }, 2000)
  }

  const toggleDoodleDisplay = () => {
    const doodleCheckbox = document.querySelector('#doodleCheckbox')

    if (doodleCheckbox.checked) {
      localStorage.setItem('doodleIsChecked', true)
      dispatch(chatActions.setDoodleIsChecked(true))
    }
    else {
      localStorage.setItem('doodleIsChecked', false)
      dispatch(chatActions.setDoodleIsChecked(false))
    }
  }

  return (
    <div className="settings-pane">
      <div className="header">
        <button onClick={() => dispatch(homePageActions.setPane('settingsPane'))}>
          <i className="material-icons">&#xe5c4;</i>
        </button>
        <p>Set Chat Wallpaper</p>
      </div>
      <div className="wallpaper-content">
        <div className="checkbox-container">
          <label className="container">
            <input
              type="checkbox"
              id="doodleCheckbox"
              defaultChecked={doodleIsChecked}
              onChange={toggleDoodleDisplay}
            />
            <span className="checkmark"></span>
          </label>
          <span>Add WhatsApp Doodles</span>
        </div>
        <div className="wallpaper-box-wrapper">
          {colorArray?.map((color, index) =>
            <span
              key={index}
              className={selectedWallpaper === color ? 'current' : ''}
              onClick={() => changeChatWallpaper(color)}
              onMouseOver={() => handleHoverEvent(color)}
              onMouseOut={() => handleHoverEvent(selectedWallpaper)}
              style={{background: color}}
            >
            </span>
          )}
        </div>
      </div>
      {toasterIsOpen && (<div className="toaster">Chat wallpaper set</div>)}
    </div>
  )
}

export default WallpaperChatPane

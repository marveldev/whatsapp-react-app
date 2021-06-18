import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homePageActions } from '../homePage/slice'
import { chatActions } from '../../data/chatSlice'
import database from '../../../database'
import './settingsPane.scss'

const WallpaperChatPane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState()
  const {
    wallpaper, previousWallpaper, doodleIsChecked
  } = useSelector(state => state.chat)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  const  lightThemeColors = [
    '#E4DDD4', '#bbe4e5', '#AFD8C6', '#7BCAA5', '#CADBEC', '#67D2D4',
    '#63BCCE', '#D6D0F0', '#CECFCF', '#D1DABE', '#E6E0B0', '#FFEEA9',
    '#FED297', '#FC6669', '#FA4669', '#932140', '#DD6F4F', '#644D52',
    '#517F7F', '#FC9B9B'
  ]

  const  darkThemeColors = [
    '#131D20', '#0F2525', '#13261E', '#11241C', '#101F27', '#0F2224',
    '#0F2025', '#1E1C25', '#212121', '#1F211C', '#22231A', '#262419',
    '#271E17', '#261616', '#270E10', '#260A10', '#19040A', '#20100D',
    '#0E0D0C', '#101919'
  ]

  const colorArray = theme === 'Dark' ? darkThemeColors : lightThemeColors

  const changeChatWallpaper = async background => {
    dispatch(chatActions.setChatWallpaper(background))
    setToasterIsOpen(true)
    await database.chatWallpaper.clear()
    await database.chatWallpaper.add({background})

    setTimeout(() => {
      setToasterIsOpen(false)
    }, 2000)
  }

  const handleHoverEvent = background => {
    const chatWallpaper = document.querySelector('.chat-wallpaper')
    chatWallpaper.style.background = background
    if (!doodleIsChecked) {
      chatWallpaper.style.opacity = 1
    } else {
      chatWallpaper.style.opacity = 0.3
    }
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
          <span
            className={
              `default-wallpaper ${wallpaper === colorArray[0] ? 'current' : ''}`
            }
            onClick={() => changeChatWallpaper(colorArray[0])}
            onMouseOver={() => handleHoverEvent(colorArray[0])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
          >
            <small>Default</small>
          </span>
          <span
            className={wallpaper === colorArray[1] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[1])}
            onMouseOver={() => handleHoverEvent(colorArray[1])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[1]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[2] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[2])}
            onMouseOver={() => handleHoverEvent(colorArray[2])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[2]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[3] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[3])}
            onMouseOver={() => handleHoverEvent(colorArray[3])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[3]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[4] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[4])}
            onMouseOver={() => handleHoverEvent(colorArray[4])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[4]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[5] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[5])}
            onMouseOver={() => handleHoverEvent(colorArray[5])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[5]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[6] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[6])}
            onMouseOver={() => handleHoverEvent(colorArray[6])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[6]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[7] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[7])}
            onMouseOver={() => handleHoverEvent(colorArray[7])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[7]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[8] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[8])}
            onMouseOver={() => handleHoverEvent(colorArray[8])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[8]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[9] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[9])}
            onMouseOver={() => handleHoverEvent(colorArray[9])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[9]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[10] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[10])}
            onMouseOver={() => handleHoverEvent(colorArray[10])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[10]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[11] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[11])}
            onMouseOver={() => handleHoverEvent(colorArray[11])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[11]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[12] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[12])}
            onMouseOver={() => handleHoverEvent(colorArray[12])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[12]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[13] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[13])}
            onMouseOver={() => handleHoverEvent(colorArray[13])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[13]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[14] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[14])}
            onMouseOver={() => handleHoverEvent(colorArray[14])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[14]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[15] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[15])}
            onMouseOver={() => handleHoverEvent(colorArray[15])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[15]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[16] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[16])}
            onMouseOver={() => handleHoverEvent(colorArray[16])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[16]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[17] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[17])}
            onMouseOver={() => handleHoverEvent(colorArray[17])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[17]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[18] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[18])}
            onMouseOver={() => handleHoverEvent(colorArray[18])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[18]}}
          >
          </span>
          <span
            className={wallpaper === colorArray[19] ? 'current' : ''}
            onClick={() => changeChatWallpaper(colorArray[19])}
            onMouseOver={() => handleHoverEvent(colorArray[19])}
            onMouseOut={() => handleHoverEvent(previousWallpaper)}
            style={{background: colorArray[19]}}
          >
          </span>
        </div>
      </div>
      {toasterIsOpen && (<div className="toaster">Chat wallpaper set</div>)}
    </div>
  )
}

export default WallpaperChatPane

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'
import { homePageActions } from '../homePage/slice'
import { darkThemeWallpaper, lightThemeWallpaper } from '../../../common'
import './settingsPane.scss'

const WallpaperChatPane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState()
  const { wallpaper, previousWallpaper } = useSelector(state => state.chat)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  const defaultWallpaper = theme === 'Dark' ? darkThemeWallpaper : lightThemeWallpaper

  const changeChatWallpaper = async background => {
    dispatch(chatActions.setChatWallpaper(background))
    setToasterIsOpen(true)
    await database.chatWallpaper.clear()
    await database.chatWallpaper.add({background})

    setTimeout(() => {
      setToasterIsOpen(false)
    }, 2000)
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
            <input type="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <p>Add WhatsApp Doodles</p>
        </div>
        <div className="wallpaper-box-wrapper">
          <span
            className={`default-wallpaper
              ${wallpaper === `url(${defaultWallpaper})` ? 'current' : ''}`
            }
            onClick={() => changeChatWallpaper(`url(${defaultWallpaper})`)}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper(`url(${defaultWallpaper})`))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
          >
            Default
          </span>
          <span
            className={wallpaper === '#bbe4e5' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#bbe4e5')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#bbe4e5'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#0F2525' : '#bbe4e5'}}
          >
          </span>
          <span
            className={wallpaper === '#AFD8C6' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#AFD8C6')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#AFD8C6'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#13261E' : '#AFD8C6'}}
          >
          </span>
          <span
            className={wallpaper === '#7BCAA5' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#7BCAA5')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#7BCAA5'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#11241C' : '#7BCAA5'}}
          >
          </span>
          <span
            className={wallpaper === '#CADBEC' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#CADBEC')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#CADBEC'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#101F27' : '#CADBEC'}}
          >
          </span>
          <span
            className={wallpaper === '#67D2D4' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#67D2D4')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#67D2D4'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#0F2224' : '#67D2D4'}}
          >
          </span>
          <span
            className={wallpaper === '#63BCCE' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#63BCCE')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#63BCCE'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#0F2025' : '#63BCCE'}}
          >
          </span>
          <span
            className={wallpaper === '#D6D0F0' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#D6D0F0')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#D6D0F0'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#1E1C25' : '#D6D0F0'}}
          >
          </span>
          <span
            className={wallpaper === '#CECFCF' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#CECFCF')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#CECFCF'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#212121' : '#CECFCF'}}
          >
          </span>
          <span
            className={wallpaper === '#D1DABE' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#D1DABE')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#D1DABE'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#1F211C' : '#D1DABE'}}
          >
          </span>
          <span
            className={wallpaper === '#E6E0B0' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#E6E0B0')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#E6E0B0'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#22231A' : '#E6E0B0'}}
          >
          </span>
          <span
            className={wallpaper === '#FFEEA9' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#FFEEA9')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#FFEEA9'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#262419' : '#FFEEA9'}}
          >
          </span>
          <span
            className={wallpaper === '#FED297' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#FED297')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#FED297'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#271E17' : '#FED297'}}
          >
          </span>
          <span
            className={wallpaper === '#FC6669' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#FC6669')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#FC6669'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: theme === 'Dark' ? '#261616' : '#FC6669'}}
          >
          </span>
          <span
            className={wallpaper === '#FA4669' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#FA4669')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#FA4669'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#FA4669'}}
          >
          </span>
          <span
            className={wallpaper === '#932140' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#932140')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#932140'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#932140'}}
          >
          </span>
          <span
            className={wallpaper === '#DD6F4F' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#DD6F4F')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#DD6F4F'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#DD6F4F'}}
          >
          </span>
          <span
            className={wallpaper === '#644D52' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#644D52')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#644D52'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#644D52'}}
          >
          </span>
          <span
            className={wallpaper === '#517F7F' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#517F7F')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#517F7F'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#517F7F'}}
          >
          </span>
          <span
            className={wallpaper === '#FC9B9B' ? 'current' : ''}
            onClick={() => changeChatWallpaper('#FC9B9B')}
            onMouseOver={() => dispatch(chatActions.setChatWallpaper('#FC9B9B'))}
            onMouseOut={() => dispatch(chatActions.setChatWallpaper(previousWallpaper))}
            style={{background: '#FC9B9B'}}
          >
          </span>
        </div>
      </div>
      {toasterIsOpen && (<div className="toaster">Chat wallpaper set</div>)}
    </div>
  )
}

export default WallpaperChatPane

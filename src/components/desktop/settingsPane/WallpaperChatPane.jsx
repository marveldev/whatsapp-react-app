import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import database from '../../../database'
import { chatActions } from '../../data/chatSlice'
import { homePageActions } from '../homePage/slice'
import { darkThemeWallpaper, lightThemeWallpaper } from '../../../common'
import './settingsPane.scss'

const WallpaperChatPane = () => {
  const [toasterIsOpen, setToasterIsOpen] = useState()
  const { wallpaper } = useSelector(state => state.chat)
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
      <div className="wallpaper-box-wrapper">
        <span
          className={`default-wallpaper
            ${wallpaper === `url(${defaultWallpaper})` ? 'current' : ''}`
          }
          onClick={() => changeChatWallpaper(`url(${defaultWallpaper})`)}
        >
          Default
        </span>
        <span
          className={wallpaper === '#bbe4e5' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#bbe4e5')}
          style={{background: '#BBE4E5'}}
        >
        </span>
        <span
          className={wallpaper === '#AFD8C6' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#AFD8C6')}
          style={{background: '#AFD8C6'}}
        >
        </span>
        <span
          className={wallpaper === '#7BCAA5' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#7BCAA5')}
          style={{background: '#7BCAA5'}}
        >
        </span>
        <span
          className={wallpaper === '#CADBEC' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#CADBEC')}
          style={{background: '#CADBEC'}}
        >
        </span>
        <span
          className={wallpaper === '#67D2D4' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#67D2D4')}
          style={{background: '#67D2D4'}}
        >
        </span>
        <span
          className={wallpaper === '#63BCCE' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#63BCCE')}
          style={{background: '#63BCCE'}}
        >
        </span>
        <span
          className={wallpaper === '#D6D0F0' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#D6D0F0')}
          style={{background: '#D6D0F0'}}
        >
        </span>
        <span
          className={wallpaper === '#CECFCF' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#CECFCF')}
          style={{background: '#CECFCF'}}
        >
        </span>
        <span
          className={wallpaper === '#D1DABE' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#D1DABE')}
          style={{background: '#D1DABE'}}
        >
        </span>
        <span
          className={wallpaper === '#E6E0B0' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#E6E0B0')}
          style={{background: '#E6E0B0'}}
        >
        </span>
        <span
          className={wallpaper === '#FFEEA9' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#FFEEA9')}
          style={{background: '#FFEEA9'}}
        >
        </span>
        <span
          className={wallpaper === '#FED297' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#FED297')}
          style={{background: '#FED297'}}
        >
        </span>
        <span
          className={wallpaper === '#FC6669' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#FC6669')}
          style={{background: '#FC6669'}}
        >
        </span>
        <span
          className={wallpaper === '#FA4669' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#FA4669')}
          style={{background: '#FA4669'}}
        >
        </span>
        <span
          className={wallpaper === '#932140' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#932140')}
          style={{background: '#932140'}}
        >
        </span>
        <span
          className={wallpaper === '#DD6F4F' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#DD6F4F')}
          style={{background: '#DD6F4F'}}
        >
        </span>
        <span
          className={wallpaper === '#644D52' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#644D52')}
          style={{background: '#644D52'}}
        >
        </span>
        <span
          className={wallpaper === '#517F7F' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#517F7F')}
          style={{background: '#517F7F'}}
        >
        </span>
        <span
          className={wallpaper === '#FC9B9B' ? 'current' : ''}
          onClick={() => changeChatWallpaper('#FC9B9B')}
          style={{background: '#FC9B9B'}}
        >
        </span>
      </div>
      {toasterIsOpen && (<div className="toaster">Chat wallpaper set</div>)}
    </div>
  )
}

export default WallpaperChatPane

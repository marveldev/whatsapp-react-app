import { useDispatch } from 'react-redux'
import { chatActions } from '../../data/chatSlice'
import { homePageActions } from '../homePage/slice'
import './settingsPane.scss'

const WallpaperChatPane = () => {
  const dispatch = useDispatch()

  const changeChatWallpaper = (background) => {
    dispatch(chatActions.setChatWallpaper(background))
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
        <span className="current default-wallpaper">Default</span>
        <span onClick={() => changeChatWallpaper('#bbe4e5')}
          style={{background: '#BBE4E5'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#AFD8C6')}
          style={{background: '#AFD8C6'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#7BCAA5')}
          style={{background: '#7BCAA5'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#CADBEC')}
          style={{background: '#CADBEC'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#67D2D4')}
          style={{background: '#67D2D4'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#63BCCE')}
          style={{background: '#63BCCE'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#D6D0F0')}
          style={{background: '#D6D0F0'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#CECFCF')}
          style={{background: '#CECFCF'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#D1DABE')}
          style={{background: '#D1DABE'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper('#E6E0B0')}
          style={{background: '#E6E0B0'}}
        >
        </span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#FFEEA9'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#FED297'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#FC6669'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#FA4669'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#932140'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#DD6F4F'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#644D52'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#517F7F'}}></span>
        <span onClick={() => changeChatWallpaper()} style={{background: '#FC9B9B'}}></span>
      </div>
      {/* <div className="toaster">Chat wallpaper set</div> */}
    </div>
  )
}

export default WallpaperChatPane

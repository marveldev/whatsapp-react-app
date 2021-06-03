import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch } from "react-router-dom"
import MobileRoutes from './common/components'
import { getChats, getWallpaper } from './components/mobile/chatPage/slice'
import { getProfile } from './components/mobile/profilePage/slice'
import { getStatus } from './components/statusPage/slice'
import './index.scss'

const App = () => {
  const { theme } = useSelector(state => state.displaySettings)
  const currentTheme = theme?.toLowerCase()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getChats())
    dispatch(getWallpaper())
    dispatch(getStatus())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className={`app-layer ${currentTheme}`}>
        <Switch>
          <MobileRoutes />
          {/* <DesktopRoutes /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

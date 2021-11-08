import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch } from "react-router-dom"
import MobileRoutes from './components/mobile/routes'
import DesktopRoutes from './components/desktop/routes'
import { getChats, getWallpaper } from './components/data/chatSlice'
import { getProfile } from './components/data/profileSlice'
import { getStatus } from './components/data/statusSlice'
import './index.scss'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getChats())
    dispatch(getWallpaper())
    dispatch(getStatus())

    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className={`app-layer ${theme?.toLowerCase()}`}>
        <Switch>
          {width < 860 && <MobileRoutes />}
          {width >= 860 && <DesktopRoutes />}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

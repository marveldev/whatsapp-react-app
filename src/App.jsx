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
  const [device, setDevice] = useState()
  const { theme } = useSelector(state => state.displaySettings)
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDevice('desktop')
    } else {
      setDevice('mobile')
    }
  
    dispatch(getProfile())
    dispatch(getChats())
    dispatch(getWallpaper())
    dispatch(getStatus())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className={`app-layer ${theme?.toLowerCase()}`}>
        <Switch>
          {device === 'mobile' && <MobileRoutes />}
          {device === 'desktop' && <DesktopRoutes />}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

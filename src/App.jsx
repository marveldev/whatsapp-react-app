import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch } from "react-router-dom"
import MobileRoutes from './components/mobile/route'
import DesktopRoutes from './components/desktop/route'

import { getChats, getWallpaper } from './components/mobile/chatPage/slice'
import { getProfile } from './components/mobile/profilePage/slice'
import { getStatus } from './components/mobile/statusPage/slice'
import './index.scss'
import { useState } from 'react'

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

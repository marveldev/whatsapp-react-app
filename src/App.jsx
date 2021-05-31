import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ChatPage, HomePage, ViewStatusEntry, StatusTextEntry,
  SettingsPage, DisplaySettingsPage, StatusGallery, ProfilePage, ContactInfoPage
} from './components'
import { getChats, getWallpaper } from './components/chatPage/slice'
import { getProfile } from './components/profilePage/slice'
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
          <Route path="/" component={HomePage} exact />
          <Route path="/chatPage/:selectedContactIndex" component={ChatPage} />
          <Route path="/settingsPage" component={SettingsPage} />
          <Route path="/displaySettingsPage" component={DisplaySettingsPage} />
          <Route path="/statusGallery" component={StatusGallery} />
          <Route path="/profilePage" component={ProfilePage} />
          <Route path="/viewStatusEntry" component={ViewStatusEntry} />
          <Route path="/statusTextEntry" component={StatusTextEntry} />
          <Route path="/contactInfoPage/:selectedContactIndex" component={ContactInfoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

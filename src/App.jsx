import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ChatPage, HomePage,
  SettingsPage, DisplaySettingsPage, StatusGallery, ProfilePage
} from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/chatPage/:selectedContactIndex" component={ChatPage} />
          <Route path="/settingsPage" component={SettingsPage} />
          <Route path="/displaySettingsPage" component={DisplaySettingsPage} />
          <Route path="/statusGallery" component={StatusGallery} />
          <Route path="/profilePage" component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

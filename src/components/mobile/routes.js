import { Route } from 'react-router-dom'
import { ChatPage, DisplaySettingsPage, HomePage, SettingsPage,
  StatusGallery, ProfilePage, ContactInfoPage, ViewStatusEntry, StatusTextEntry
} from '../mobile'

const MobileRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/chatPage/:selectedContactIndex" component={ChatPage} />
      <Route path="/settingsPage" component={SettingsPage} />
      <Route path="/displaySettingsPage" component={DisplaySettingsPage} />
      <Route path="/statusGallery" component={StatusGallery} />
      <Route path="/profilePage" component={ProfilePage} />
      <Route path="/viewStatusEntry" component={ViewStatusEntry} />
      <Route path="/statusTextEntry" component={StatusTextEntry} />
      <Route path="/contactInfoPage/:selectedContactIndex" component={ContactInfoPage} />
    </>
  )
}

export default MobileRoutes

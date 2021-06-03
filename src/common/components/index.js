import { Route } from 'react-router-dom'
import { ChatPage, DisplaySettingsPage, HomePage, SettingsPage,
  StatusGallery, ProfilePage, ContactInfoPage, ViewStatusEntry, StatusTextEntry
} from '../../components'

const MobileRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/mobile/chatPage/:selectedContactIndex" component={ChatPage} />
      <Route path="/mobile/settingsPage" component={SettingsPage} />
      <Route path="/mobile/displaySettingsPage" component={DisplaySettingsPage} />
      <Route path="/mobile/statusGallery" component={StatusGallery} />
      <Route path="/mobile/profilePage" component={ProfilePage} />
      <Route path="/mobile/viewStatusEntry" component={ViewStatusEntry} />
      <Route path="/mobile/statusTextEntry" component={StatusTextEntry} />
      <Route path="/mobile/contactInfoPage/:selectedContactIndex" component={ContactInfoPage} />
    </>
  )
}

export default MobileRoutes

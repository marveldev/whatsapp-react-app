import { Route } from 'react-router-dom'
import { ChatPage, DisplaySettingsPage, HomePage, SettingsPage,
  StatusGallery, ProfilePage, ContactInfoPage, ViewStatusEntry, StatusTextEntry
} from '../desktop'

const DesktopRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      {/* <Route path="/desktop/chatPage/:selectedContactIndex" component={ChatPage} />
      <Route path="/desktop/settingsPage" component={SettingsPage} />
      <Route path="/desktop/displaySettingsPage" component={DisplaySettingsPage} />
      <Route path="/desktop/statusGallery" component={StatusGallery} />
      <Route path="/desktop/profilePage" component={ProfilePage} />
      <Route path="/desktop/viewStatusEntry" component={ViewStatusEntry} />
      <Route path="/desktop/statusTextEntry" component={StatusTextEntry} />
      <Route path="/desktop/contactInfoPage/:selectedContactIndex"
        component={ContactInfoPage}
      /> */}
    </>
  )
}

export default DesktopRoutes

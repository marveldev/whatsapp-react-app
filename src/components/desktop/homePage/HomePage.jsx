import { useSelector } from 'react-redux'
import { ChatPage } from '../chatPage'
import { ContactInfoPane } from '../contactInfoPane'
import { DefaultPage } from '../defaultPage'
import { DefaultPane } from '../defaultPane'
import { ProfilePane } from '../profilePane'
import { SettingsPane, WallpaperPane } from '../settingsPane'

const HomePage = () => {
  const { currentPane, selectedContact, rightPaneIsOpen }
    = useSelector(state => state.homePage)

  return (
    <div className={`home-page ${rightPaneIsOpen && 'right-pane'}`}>
      <div>
        {currentPane === 'defaultPane' && <DefaultPane />}
        {currentPane === 'profilePane' && <ProfilePane />}
        {currentPane === 'settingsPane' && <SettingsPane />}
        {currentPane === 'wallpaperPane' && <WallpaperPane />}
      </div>
      {selectedContact && <ChatPage />}
      {!selectedContact && <DefaultPage />}
      {rightPaneIsOpen && <ContactInfoPane />}
    </div>
  )
}

export default HomePage

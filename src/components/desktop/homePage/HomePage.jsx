import { useSelector } from 'react-redux'
import { ChatPage } from '../chatPage'
import { DefaultPage } from '../defaultPage'
import { LeftPane } from '../leftPane'
import { ProfilePane } from '../profilePane'

const HomePage = () => {
  const { currentPane, selectedContact } = useSelector(state => state.homePage)

  return (
    <div className="home-page">
      <div>
        {currentPane === 'leftPane' && <LeftPane />}
        {currentPane === 'profilePane' && <ProfilePane />}
      </div>
      {selectedContact && <ChatPage />}
      {!selectedContact && <DefaultPage />}
    </div>
  )
}

export default HomePage

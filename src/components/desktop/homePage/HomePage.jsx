import { useSelector } from 'react-redux'
import { ChatPage } from '../chatPage'
import { DefaultPage } from '../defaultPage'
import { DefaultPane } from '../defaultPane'
import { ProfilePane } from '../profilePane'

const HomePage = () => {
  const { currentPane, selectedContact } = useSelector(state => state.homePage)

  return (
    <div className="home-page">
      <div>
        {currentPane === 'defaultPane' && <DefaultPane />}
        {currentPane === 'profilePane' && <ProfilePane />}
      </div>
      {selectedContact && <ChatPage />}
      {!selectedContact && <DefaultPage />}
    </div>
  )
}

export default HomePage

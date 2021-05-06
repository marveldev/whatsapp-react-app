import { useSelector } from 'react-redux'
import CallsPage from '../callsPage/CallsPage'
import ContactListPage from '../chatPage/ContactListPage'
import StatusPage from '../statusPage/StatusPage'
import TopNav from '../topNav/TopNav'

const HomePage = () => {
  const { currentPage } = useSelector(state => state.currentPage)

  return (
    <div>
      <TopNav />
      {currentPage === 'contactList' && <ContactListPage />}
      {currentPage === 'statusPage' && <StatusPage />}
      {currentPage === 'callsPage' && <CallsPage />}
    </div>
  )
}

export default HomePage

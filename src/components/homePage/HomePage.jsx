import CallsPage from '../callsPage/CallsPage'
import ContactListPage from '../chatPage/ContactListPage'
import TopNav from '../topNav/TopNav'

const HomePage = () => {
  return (
    <div>
      <TopNav />
      {/* <ContactListPage /> */}
      <CallsPage />
    </div>
  )
}

export default HomePage

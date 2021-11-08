import { Redirect, Route } from 'react-router-dom'
import { HomePage, StatusPage, ViewStatusEntry, StatusTextEntry } from '../desktop'

const DesktopRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/status" component={StatusPage} />
      <Route path="/viewStatus" component={ViewStatusEntry} />
      <Route path="/statusTextEntry" component={StatusTextEntry} />
      <Redirect to='/' />
    </>
  )
}

export default DesktopRoutes

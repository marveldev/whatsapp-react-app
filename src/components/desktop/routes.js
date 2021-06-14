import { Route } from 'react-router-dom'
import { HomePage, StatusPage, ViewStatusEntry } from '../desktop'

const DesktopRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/status" component={StatusPage} />
      <Route path="/viewStatus" component={ViewStatusEntry} />
    </>
  )
}

export default DesktopRoutes

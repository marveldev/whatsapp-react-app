import { Route } from 'react-router-dom'
import { HomePage, StatusPage } from '../desktop'

const DesktopRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/status" component={StatusPage} />
    </>
  )
}

export default DesktopRoutes

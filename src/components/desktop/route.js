import { Route } from 'react-router-dom'
import { HomePage } from '../desktop'

const DesktopRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
    </>
  )
}

export default DesktopRoutes

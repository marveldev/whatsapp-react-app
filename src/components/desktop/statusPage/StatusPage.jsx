import StatusPane from './StatusPane'
import StatusGallery from './StatusGallery'
import './statusPage.scss'

const StatusPage = () => {
  return (
    <div className="desktop-status-page">
      <div>
        <StatusPane />
      </div>
      <StatusGallery />
    </div>
  )
}

export default StatusPage

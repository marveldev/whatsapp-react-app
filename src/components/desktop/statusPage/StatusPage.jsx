import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StatusPane from './StatusPane'
import StatusGallery from './StatusGallery'
import database from '../../../database'
import './statusPage.scss'

const StatusPage = () => {
  const { statusData } = useSelector(state => state.status)

  useEffect(() => {
    statusData.map(async ({storedTime, id}) => {
      const timeDifference = new Date().getTime() - storedTime
      const statusDuration = Math.floor(timeDifference/1000/60/60)
      if (statusDuration >= '24') {
        await database.status.delete(id)
      }
    })
  }, [statusData])

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

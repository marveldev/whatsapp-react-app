import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StatusPane from './StatusPane'
import StatusGallery from './StatusGallery'
import { statusActions } from '../../data/statusSlice'
import database from '../../../database'
import './statusPage.scss'

const StatusPage = () => {
  const { statusData } = useSelector(state => state.status)
  const dispatch = useDispatch()

  useEffect(() => {
    statusData.map(async ({ storedTime, id }) => {
      const timeDifference = new Date().getTime() - storedTime
      const statusDuration = Math.floor(timeDifference/1000/60/60)
      if (statusDuration >= 24) {
        await database.status.delete(id)
      }
    })
    
    dispatch(statusActions.setUserIsReloading(false))
  }, [statusData, dispatch])

  return (
    <div className="desktop-status-page">
      <StatusPane />
      <StatusGallery />
    </div>
  )
}

export default StatusPage

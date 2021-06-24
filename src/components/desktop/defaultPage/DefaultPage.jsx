import { useSelector } from 'react-redux'
import { defaultLightPagePhoto, defaultDarkPagePhoto } from '../../../common'
import './defaultPage.scss'

const DefaultPage = () => {
  const { theme } = useSelector(state => state.displaySettings)

  return (
    <div className="default-page">
      <div>
        <img src={theme === 'Dark' ? defaultDarkPagePhoto : defaultLightPagePhoto}
          alt="phone-in-hand"
        />
        <p>Keep your phone connected</p>
        <span>WhatsApp connects to your phone to sync messages.
          To reduce data usage, connect your phone to Wi-Fi.
        </span>
      </div>
      <p>WhatsApp is available for Windows. <span>Get it here.</span></p>
    </div>
  )
}

export default DefaultPage

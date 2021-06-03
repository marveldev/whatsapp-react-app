import { defaultLightPagePhoto } from '../../../common'
import './defaultPage.scss'

const DefaultPage = () => {
  return (
    <div className="default-page">
      <div>
        <img src={defaultLightPagePhoto} alt="phone-in-hand" />
        <p>Keep your phone connected</p>
        <span>WhatsApp connects to your phone to sync messages.
          To reduce data usuage, connect your phone to Wi-Fi.
        </span>
      </div>
      <p>WhatsApp is available for Windows. <span>Get it here.</span></p>
    </div>
  )
}

export default DefaultPage

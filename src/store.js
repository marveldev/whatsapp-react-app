import { configureStore } from '@reduxjs/toolkit'
import { homePageReducers } from './components/desktop/homePage/slice'
import { chatReducers } from './components/mobile/chatPage/slice'
import { currentPageReducers } from './components/mobile/homePage/slice'
import { profileReducers } from './components/mobile/profilePage/slice'
import { displaySettingsReducers } from './components/mobile/settingsPage/slice'
import { statusReducers } from './components/mobile/statusPage/slice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers,
    chat: chatReducers,
    status: statusReducers,
    profile: profileReducers,
    displaySettings: displaySettingsReducers,
    homePage: homePageReducers
  }
})

import { configureStore } from '@reduxjs/toolkit'
import { homePageReducers } from './components/desktop/homePage/slice'
import { currentPageReducers } from './components/mobile/homePage/slice'
import { chatReducers } from './components/data/chatSlice'
import { profileReducers } from './components/data/profileSlice'
import { displaySettingsReducers } from './components/data/settingsSlice'
import { statusReducers } from './components/data/statusSlice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers,
    homePage: homePageReducers,
    chat: chatReducers,
    status: statusReducers,
    profile: profileReducers,
    displaySettings: displaySettingsReducers
  }
})

import { configureStore } from '@reduxjs/toolkit'
import { chatReducers } from './components/chatPage/slice'
import { currentPageReducers } from './components/homePage/slice'
import { profileReducers } from './components/profilePage/slice'
import { themeReducers } from './components/settingsPage/slice'
import { statusReducers } from './components/statusPage/slice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers,
    chat: chatReducers,
    status: statusReducers,
    profile: profileReducers,
    theme: themeReducers
  }
})

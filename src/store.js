import { configureStore } from '@reduxjs/toolkit'
import { chatReducers } from './components/chatPage/slice'
import { currentPageReducers } from './components/homePage/slice'
import { statusReducers } from './components/statusPage/slice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers,
    chat: chatReducers,
    status: statusReducers
  }
})

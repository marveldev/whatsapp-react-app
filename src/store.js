import { configureStore } from '@reduxjs/toolkit'
import { chatReducers } from './components/chatPage/slice'
import { contactListReducers } from './components/contactListPage/slice'
import { currentPageReducers } from './components/homePage/slice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers,
    chat: chatReducers,
    contact: contactListReducers
  }
})

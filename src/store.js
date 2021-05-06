import { configureStore } from '@reduxjs/toolkit'
import { currentPageReducers } from './components/homePage/slice'

export default configureStore({
  reducer: {
    currentPage: currentPageReducers
  }
})

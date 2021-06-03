import { createSlice } from '@reduxjs/toolkit'

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    currentPage: localStorage.getItem('storedPage') || 'contactList'
  },
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    }
  }
})

const { actions: currentPageActions, reducer: currentPageReducers } = currentPageSlice

export { currentPageActions, currentPageReducers }

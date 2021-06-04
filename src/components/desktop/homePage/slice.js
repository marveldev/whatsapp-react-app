import { createSlice } from '@reduxjs/toolkit'

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    currentPane: 'defaultPane',
    selectedContact: null
  },
  reducers: {
    setCurrentPane: (state, { payload }) => {
      state.currentPane = payload
    },
    selectContact: (state, { payload }) => {
      state.selectedContact = payload
    }
  }
})

const { actions: homePageActions, reducer: homePageReducers } = homePageSlice

export { homePageActions, homePageReducers }

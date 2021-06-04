import { createSlice } from '@reduxjs/toolkit'

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    currentPane: 'profilePane',
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

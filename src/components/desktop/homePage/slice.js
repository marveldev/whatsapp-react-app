import { createSlice } from '@reduxjs/toolkit'

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    currentPane: 'defaultPane',
    previousPane: null,
    selectedContact: null
  },
  reducers: {
    setPane: (state, { payload }) => {
      state.previousPane = state.currentPane
      state.currentPane = payload
    },
    selectContact: (state, { payload }) => {
      state.selectedContact = payload
    }
  }
})

const { actions: homePageActions, reducer: homePageReducers } = homePageSlice

export { homePageActions, homePageReducers }

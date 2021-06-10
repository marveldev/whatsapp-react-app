import { createSlice } from '@reduxjs/toolkit'

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    currentPane: 'defaultPane',
    previousPane: null,
    selectedContact: null,
    rightPaneIsOpen: false
  },
  reducers: {
    setPane: (state, { payload }) => {
      state.previousPane = state.currentPane
      state.currentPane = payload
    },
    selectContact: (state, { payload }) => {
      state.selectedContact = payload
    },
    setRightPaneIsOpen: (state, { payload }) => {
      state.rightPaneIsOpen = payload
    }
  }
})

const { actions: homePageActions, reducer: homePageReducers } = homePageSlice

export { homePageActions, homePageReducers }

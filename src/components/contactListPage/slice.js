import { createSlice } from '@reduxjs/toolkit'

const contactListSlice = createSlice({
  name: 'contact',
  initialState: {
    selectedContact: {}
  },
  reducers: {
    addSelectedContact: (state, { payload }) => {
      state.selectedContact = payload
    }
  }
})

const { actions: contactListActions, reducer: contactListReducers } = contactListSlice

export { contactListActions, contactListReducers }

import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatData: []
  },
  reducers: {
    addChat: (state, { payload }) => {
      state.chatData = [...state.chatData, payload]
    },
    addMultipleChat: (state, { payload }) => {
      state.chatData = payload
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers }

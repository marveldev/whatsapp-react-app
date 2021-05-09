import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatData: []
  },
  reducers: {
    setChatData: (state, { payload }) => {
      state.chatData = [...state.posts, payload]
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers }

import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [],
    wallpaper: ''
  },
  reducers: {
    addChat: (state, { payload }) => {
      state.chats = [...state.chats, payload]
    },
    addMultipleChat: (state, { payload }) => {
      state.chats = payload
    },
    setChatWallpaper: (state, { payload }) => {
      state.wallpaper = payload
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers }

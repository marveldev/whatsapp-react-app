import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '../../database'

const getChats = createAsyncThunk('chat/getChats', async () => {
  return await database.chat.toArray()
})

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [],
    wallpaper: null
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
  },
  extraReducers: {
    [getChats.fulfilled]: (state, { payload }) => {
      state.chats = payload
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers, getChats }

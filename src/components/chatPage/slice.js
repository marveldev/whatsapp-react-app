import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '../../database'

const getChats = createAsyncThunk('chat/getChats', async () => {
  return await database.chat.toArray()
})

const getWallpaper = createAsyncThunk('chat/getWallpaper', async () => {
  return await database.chatWallpaper.toArray()
})

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
  },
  extraReducers: {
    [getChats.fulfilled]: (state, { payload }) => {
      state.chats = payload
    },
    [getWallpaper.fulfilled]: (state, { payload }) => {
      state.wallpaper = payload[0].wallpaper
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers, getChats, getWallpaper }

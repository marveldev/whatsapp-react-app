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
    chatPhoto: null,
    chatInputValue: '',
    selectedChatCount: 0,
    wallpaper: null,
    selectedWallpaper: null,
    doodleIsChecked: localStorage.getItem('doodleIsChecked') === 'true' ? true : false
  },
  reducers: {
    addChat: (state, { payload }) => {
      state.chats = [...state.chats, payload]
    },
    addMultipleChat: (state, { payload }) => {
      state.chats = payload
    },
    setSelectedChatCount: (state, { payload }) => {
      state.selectedChatCount = payload
    },
    setChatWallpaper: (state, { payload }) => {
      state.wallpaper = payload
    },
    setSelectedWallpaper: (state, { payload }) => {
      state.selectedWallpaper = payload
    },
    setDoodleIsChecked: (state, { payload }) => {
      state.doodleIsChecked = payload
    },
    setChatPhoto: (state, { payload }) => {
      state.chatPhoto = payload
    },
    setChatInputValue: (state, { payload }) => {
      state.chatInputValue = payload
    }
  },
  extraReducers: {
    [getChats.fulfilled]: (state, { payload }) => {
      state.chats = payload
    },
    [getWallpaper.fulfilled]: (state, { payload }) => {
      state.wallpaper = {background: payload[0]?.background}
      state.selectedWallpaper = payload[0]?.background
    }
  }
})

const { actions: chatActions, reducer: chatReducers } = chatSlice

export { chatActions, chatReducers, getChats, getWallpaper }

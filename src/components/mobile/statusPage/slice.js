import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import database from '../../database'

const getStatus = createAsyncThunk('chat/getStatus', async () => {
  return await database.status.toArray()
})

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    statusData: []
  },
  reducers: {
    addStatus: (state, { payload }) => {
      state.statusData = [...state.statusData, payload]
    },
    addMultipleStatus: (state, { payload }) => {
      state.statusData = payload
    }
  },
  extraReducers: {
    [getStatus.fulfilled]: (state, { payload }) => {
      state.statusData = payload
    }
  }
})

const { actions: statusActions, reducer: statusReducers } = statusSlice

export { statusActions, statusReducers, getStatus }

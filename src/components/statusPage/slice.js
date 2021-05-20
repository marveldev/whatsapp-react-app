import { createSlice } from '@reduxjs/toolkit'

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    statusData: [],
    currentStatusIndex: 0
  },
  reducers: {
    addStatus: (state, { payload }) => {
      state.statusData = [...state.statusData, payload]
    },
    setCurrentStatusIndex: (state, { payload }) => {
      state.currentStatusIndex = payload
    }
  }
})

const { actions: statusActions, reducer: statusReducers } = statusSlice

export { statusActions, statusReducers }

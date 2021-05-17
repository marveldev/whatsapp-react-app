import { createSlice } from '@reduxjs/toolkit'

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    statusData: []
  },
  reducers: {
    addStatus: (state, { payload }) => {
      state.statusData = [...state.statusData, payload]
    }
  }
})

const { actions: statusActions, reducer: statusReducers } = statusSlice

export { statusActions, statusReducers }

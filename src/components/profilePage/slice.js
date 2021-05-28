import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import database from '../../database'

const getProfile = createAsyncThunk('chat/getProfile', async () => {
  return await database.profile.toArray()
})

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileObject: {}
  },
  reducers: {
    setProfile: (state, { payload }) => {
      state.profileObject = payload
    }
  },
  extraReducers: {
    [getProfile.fulfilled]: (state, { payload }) => {
      state.profileObject = payload[0]
    }
  }
})

const { actions: profileActions, reducer: profileReducers } = profileSlice

export { profileActions, profileReducers, getProfile }

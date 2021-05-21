import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileObject: {}
  },
  reducers: {
    setProfile: (state, { payload }) => {
      state.profileObject = payload
    }
  }
})

const { actions: profileActions, reducer: profileReducers } = profileSlice

export { profileActions, profileReducers }

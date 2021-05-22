import { createSlice } from '@reduxjs/toolkit'
import { constants } from '../../common'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileObject: {
      profilePhoto: constants.PHOTOURL,
      name: 'Add profile'
    }
  },
  reducers: {
    setProfile: (state, { payload }) => {
      state.profileObject = payload
    }
  }
})

const { actions: profileActions, reducer: profileReducers } = profileSlice

export { profileActions, profileReducers }

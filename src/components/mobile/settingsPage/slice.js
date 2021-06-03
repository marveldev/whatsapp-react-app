import { createSlice } from '@reduxjs/toolkit'

const displaySettingsSlice = createSlice({
  name: 'displaySettings',
  initialState: {
    theme: localStorage.getItem('storedTheme') || 'Light',
    fontSize: localStorage.getItem('storedFontSize') || 'Medium'
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
    },
    setFontSize: (state, { payload }) => {
      state.fontSize = payload
    }
  }
})

const { actions: displaySettingsActions, reducer: displaySettingsReducers } = displaySettingsSlice

export { displaySettingsActions, displaySettingsReducers }

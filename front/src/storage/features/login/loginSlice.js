import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem('Oauth'),
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      OauthSlice: (state, action) => {
        state.value = action.payload
      },
    },
  })

export const {OauthSlice} = loginSlice.actions

export default loginSlice.reducer

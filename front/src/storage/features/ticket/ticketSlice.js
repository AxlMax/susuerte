import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
    content : null,
    validate : {}
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
      imageInfoSlice: (state, action) => {
        state.value = action.payload
      },
      imageContentSlice: (state, action) => {
        state.content = action.payload
      },
      validateSlice:(state, action) => {
        state.validate = action.payload
      }
    },
  })

export const {imageInfoSlice, imageContentSlice, validateSlice} = ticketSlice.actions

export default ticketSlice.reducer

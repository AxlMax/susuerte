import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import ticketReducer from './features/ticket/ticketSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    ticket: ticketReducer
  },
})
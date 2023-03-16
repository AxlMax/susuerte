import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import idAmbulaciaReducer from './features/idAmbulancias/idAmbulanciasSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    idAmbulancia : idAmbulaciaReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authState/authSlice'
export  const store = configureStore({
    reducer:{
        auth:authReducer
    },
})



import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts/postsSlice.js'
import authReducer from './auth/authSlice.js'
import alertReducer from './alert/alertSlice.js'

export default configureStore({
    reducer: {
        postsReducer: postsReducer,
        authReducer: authReducer,
        alertReducer: alertReducer
    },
})
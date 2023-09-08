import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    msg: "",
    type: "normal",
    open: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: initialState,
    reducers: {
        setAlert(state, action) {
            const { message, type = "normal" } = action.payload
            state.open = true
            state.msg = message
            state.type = type
        },
        closeAlert(state, action) {
            state.open = false
        }
    },
})

export const { setAlert, closeAlert } = alertSlice.actions

export default alertSlice.reducer
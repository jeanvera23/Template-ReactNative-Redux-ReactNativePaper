import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../utils/fetch'
import { config } from '../../utils/config'

const initialState = {
  userToken: null,
  status: 'idle',
  error: null,
}


export const login = createAsyncThunk(
  'auth/login',
  async (data, { getState }) => {
    console.log("createAsyncThunk login()")
    const { email, password } = data
    const response = await client.post(config.backendUrl + '/users/login',
      {
        code: password
      }
    )

    return response.data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    restoreToken(state, action) {
      state.userToken = action.payload
      state.status = 'succeeded'
    },
    logout(state, action) {
      state.userToken = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
        console.log("loading...")
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token } = action.payload
        state.status = 'succeeded'
        state.error = null
        state.userToken = token

        console.log("OK")
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = "Invalid username and/or password"

        console.log("failed", state.error)
      })
  },
})

export const { logout, restoreToken } = authSlice.actions

export default authSlice.reducer
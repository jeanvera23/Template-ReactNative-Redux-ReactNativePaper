import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../utils/fetch'

const initialState = {
  posts: [{
    id: 1,
    title: "Explore 1",
  },
  {
    id: 2,
    title: "Explore 2",
  },
  {
    id: 3,
    title: "Explore 3",
  },
  {
    id: 4,
    title: "Explore 4",
  },
  {
    id: 5,
    title: "Explore 5",
  },
  {
    id: 6,
    title: "Explore 6",
  }],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await client.get('/posts')
    return response.data
  }
)

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost) => {
    const response = await client.post('/posts', initialPost)
    return response.data
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload)
        console.log("OK")
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
  },
})

export const { } = postsSlice.actions

export default postsSlice.reducer

export const selectPostById = (state, id) =>
  state.postsReducer.posts.find((item) => item.id === id)
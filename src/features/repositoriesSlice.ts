import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Repository } from '../types/Repository'

interface RepositoriesState {
  repositories: Repository[]
  loading: boolean
  error: string | null
}

const initialState: RepositoriesState = {
  repositories: [],
  loading: false,
  error: null,
}

export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async (searchQuery: string) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}`
    )
    return response.data.items
  }
)

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false
        state.repositories = action.payload
        state.error = null
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch repositories'
      })
  },
})

export default repositoriesSlice.reducer

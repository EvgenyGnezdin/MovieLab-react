import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from "../../services/useRequest";

export const fetchMovieId = createAsyncThunk(
    'movieId/fetchMovieId',
    async (id) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${+id}`)
        return response
    }
)

const initialState = {
    movie: null,
    load: false,
    error: null
}

const movieIdSlice = createSlice({
    name: 'movieId',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovieId.pending, (state) => {
                state.load = true
            })
            .addCase(fetchMovieId.fulfilled, (state, action) => {
                state.load = false
                state.movie = action.payload
            })
            .addCase(fetchMovieId.rejected, (state,action) => {
                state.error = action.error.message
                state.load = false
            })
    }
})

const { reducer } = movieIdSlice;
export default reducer;
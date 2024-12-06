import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from "../../services/useRequest";

export const fetchSearchMovie = createAsyncThunk(
    'searchMovie/fetchSearchMovie',
    async (text) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}&page=1`,)
        return response.films
    }
)

const initialState = {
    movies: [],
    load: false,
    error: null
}

const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSearchMovie.pending, (state) => {
                state.load = true
            })
            .addCase(fetchSearchMovie.fulfilled, (state, action) => {
                state.load = false
                state.movies = action.payload 
            })
            .addCase(fetchSearchMovie.rejected, (state,action) => {
                state.error = action.error.message
                state.load = false
            })
    }
})

const { reducer } = searchMovieSlice;
export default reducer;
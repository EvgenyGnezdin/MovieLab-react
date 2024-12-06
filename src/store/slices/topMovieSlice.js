import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../services/useRequest";


export const fetchTopMovie = createAsyncThunk(
    'topMovie/fetchTopMovie',
    async (page = 1) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${page}`)
        return response.items
    }
)

const initialState = {
    topMovie: [],
    load: false,
    error: null,
    page: 1
};


const topMovieSlice = createSlice({
    name: "topMovie",
    initialState,
    reducers: {
        setPage(state) {
            ++state.page
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTopMovie.pending, (state) => {
                state.load = true
            })
            .addCase(fetchTopMovie.fulfilled, (state, action) => {
                state.topMovie.push(...action.payload)
                state.load = false;
            })
            .addCase(fetchTopMovie.rejected, (state, action) => {
                state.error = action.error.message
                state.load = false
            })
    }
})

const { reducer } = topMovieSlice

export default reducer;
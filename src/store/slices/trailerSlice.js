import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../services/useRequest";


export const fetchTrailer = createAsyncThunk(
    'trailer/fetchTrailer',
    async (id) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`)
        return response.items[0].url
    }
)

const initialState = {
    trailer: null,
    load: false,
    error: null
};


const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTrailer.pending, (state) => {
                state.load = true
            })
            .addCase(fetchTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload
                state.load = false;
            })
            .addCase(fetchTrailer.rejected, (state, action) => {
                state.error = action.error.message
                state.load = false
            })
    }
})

const { reducer } = trailerSlice

export default reducer;
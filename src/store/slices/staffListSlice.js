import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from "../../services/useRequest";

export const fetchStaffList = createAsyncThunk(
    'staffList/fetchStaffList',
    async (text) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${text}`)
        return response.slice(0, 10)
    }
)

const initialState = {
    staffList: null,
    load: false,
    error: null
}

const staffListSlice = createSlice({
    name: 'staffList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchStaffList.pending, (state) => {
                state.load = true
            })
            .addCase(fetchStaffList.fulfilled, (state, action) => {
                state.load = false
                state.staffList = action.payload
            })
            .addCase(fetchStaffList.rejected, (state,action) => {
                state.error = action.error.message
                state.load = false
            })
    }
})

const { reducer } = staffListSlice;
export default reducer;
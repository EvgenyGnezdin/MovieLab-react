import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import topMovieReducer from './slices/topMovieSlice'
import movieIdReducer from './slices/movieIdSlice'
import trailerReducer from './slices/trailerSlice'
import searchMovieReducer from './slices/searchMovieSlice'
import staffListReducer from './slices/staffListSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        topMovie: topMovieReducer,
        movieId: movieIdReducer,
        trailer: trailerReducer,
        searchMovie: searchMovieReducer,
        staffList: staffListReducer
    }
})
export default store;
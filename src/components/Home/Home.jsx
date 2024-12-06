import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { movieList } from "../../context";
import { fetchTopMovie } from "../../store/slices/topMovieSlice";
import { fetchSearchMovie } from "../../store/slices/searchMovieSlice";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";
import MovieInfo from "../MovieInfo/MovieInfo";
import MoviesList from "../MovieList/MoviesList";

const Home = () => {
    const [showSideBar, setShowSideBar] = useState(false)
    const [page, setPage] = useState(1)
    const [textInput, setTextInput] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopMovie(page))
    },[page])

    
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchSearchMovie(textInput, page))
    }


    const toggleSideBar = useCallback(() => {
        setShowSideBar(prev =>!prev)
    },[])

    
    return (
        <>
            <Header 
                toggleSideBar={toggleSideBar} 
                setTextInput={setTextInput} 
                textInput={textInput}
                handleSearchSubmit={handleSearchSubmit} 
            /> 
            <SidePanel 
                showSideBar={showSideBar} 
                toggleSideBar={toggleSideBar}
            />
            <Routes>
                <Route path="/*" element={
                    <movieList.Provider value={{setPage, page}}>
                        <MoviesList/>
                    </movieList.Provider>
                    }/>
                <Route path="/:id" element={
                        <MovieInfo/>
                    }/>
            </Routes> 
        </>
    )
};

export default Home;
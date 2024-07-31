import { useState, useEffect, useCallback } from "react";
import { useMovie } from "../../services/useMovie";
import { useLocation, Routes, Route } from "react-router-dom";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";
import MovieInfo from "../MovieInfo/MovieInfo";
import MoviesList from "../MovieList/MoviesList";

import styles from './Home.module.scss'

const Home = () => {
    const [movieImages, setMovieImages] = useState()
    const [showSideBar, setShowSideBar] = useState(false)
    const [page, setPage] = useState(1)
    const [textInput, setTextInput] = useState()
    const [topMovie, setTopMovie] = useState([])
    const [resultsSearch, setResultsSearch] = useState(null)
    const { getTopMovie, getSearchId } = useMovie();

    const location = useLocation()
 
    useEffect(() => {
        getTopMovie(page)
        .then(loadTopMovie)
    // eslint-disable-next-line
    },[page])
 
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        getSearchId(textInput).
        then(loadSearchResults)
    }

    const loadTopMovie = (newMovieList) => {
        setTopMovie(movieList => [...movieList, ...newMovieList])
    }

    const loadSearchResults = (newSearchResults) => {
        setResultsSearch(newSearchResults)
    }

    const toggleSideBar = useCallback(() => {
        setShowSideBar(prev =>!prev)
    },[])

    return (
        <>
            <div className={styles.app} 
                style={{background: location.pathname == '/' ? null : `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${movieImages}) center/cover no-repeat`}}>
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
                    <Route path="/*" element={<MoviesList setPage={setPage} page={page} movies={topMovie} results={resultsSearch}/>}/>
                    <Route path="/:id" element={<MovieInfo setMovieImages={setMovieImages}/>}/>
                </Routes>
            </div>
        </>
    )
};

export default Home;
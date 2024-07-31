import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMovie } from '../../services/useMovie';
import PropTypes from 'prop-types'

import { FaPlay } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import Spinner from '../Spinner/Spinner';

import styles from './MovieInfo.module.scss'


const MovieInfo = ({ setMovieImages }) => {
    const [movieInfo, setMovieInfo] = useState()
    const [trailer, setTrailer] =useState()
    const { getMovieId, getImagesId, getTrailer } = useMovie()
    const movieId = useParams()
    const id = movieId.id 

    useEffect(() => {
        getMovieId(id)
            .then(onLoadMovie)
    // eslint-disable-next-line
    },[id])
    
    useEffect(() => {
        getImagesId(id)
            .then(onLoadImages)
    // eslint-disable-next-line
    },[id])

    useEffect(() => {
        getTrailer(id)
            .then(onLoadTrailer)
    // eslint-disable-next-line
    },[id])

    const onLoadMovie = (newMovie) => {
        setMovieInfo(newMovie)
    }
    const onLoadImages = (newImages) => {
        setMovieImages(newImages)
    }
    const onLoadTrailer = (newTrailer) => {
        setTrailer(newTrailer)
    }
    console.log(trailer)
    const content = movieInfo ? <View movieInfo={movieInfo} trailer={trailer}/> : <Spinner/>
    return (
        <>
            {content}
        </>
    ) 
};


const View = ({ movieInfo, trailer }) => {
    const { nameRu, posterUrl, year, description, countries, genres } = movieInfo;
    
    return (
        <>
            <div className={styles.movieInfo}>
                <div className={styles.imgBlock}>
                    <img src={posterUrl} alt={nameRu} />
                </div>
            <div className={styles.infoBlock}>
                <div className={styles.info}>
                    <div className={styles.block}>
                        <h1>{nameRu}</h1>
                        <div className={styles.infoMovie}>Жанр: {genres.map((item, i) => (
                                <div key={i}>&nbsp;{item.genre}</div>
                            ))}
                        </div>
                        <div className={styles.infoMovie}>
                            Страна: {countries.map((item, i) => (
                                <div key={i}>&nbsp;{item.country}</div>
                            ))}
                        </div>
                        <h4>Год: {year}</h4>
                    </div>
                    <a href={trailer} target="_blank" rel="noreferrer"><h4><FaPlay/>Смотреть трейлер.</h4></a>
                </div>
                <p>{description}</p>
            </div>
        </div>
        <Link className={styles.link} to='/'><MdArrowBack style={{fontSize: '22px'}}/>К списку фильмов</Link>
        </>
    );
}
MovieInfo.propTypes = {
    setMovieImages: PropTypes.func
}
View.propTypes = {
    nameRu: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.string,
    posterUrl: PropTypes.string,
    genres: PropTypes.string,
    countries: PropTypes.string,
    movieImages: PropTypes.string,
    movieInfo: PropTypes.object,
    trailer: PropTypes.string
}

export default MovieInfo;
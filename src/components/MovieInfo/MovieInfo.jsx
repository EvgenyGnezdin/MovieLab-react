import PropTypes from 'prop-types'

import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";


import ListStaff from '../ListStaff/ListStaff';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { fetchMovieId } from '../../store/slices/movieIdSlice';
import { fetchTrailer } from '../../store/slices/trailerSlice';
import styles from './MovieInfo.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStaffList } from '../../store/slices/staffListSlice';

const MovieInfo = () => {
    const { movie, load, error } = useSelector(state => state.movieId)
    const { trailer } = useSelector(state => state.trailer)
    const { staffList} = useSelector(state => state.staffList)

    const movieID = useParams()
    const id = movieID.id 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovieId(id))
        // eslint-disable-next-line
    },[id])
    useEffect(() => {
        dispatch(fetchTrailer(id))
        // eslint-disable-next-line
    },[id])

    useEffect(() => {
        dispatch(fetchStaffList(id))
        // eslint-disable-next-line
    },[id])


    const content = movie ? <View movieInfo={movie} trailer={trailer} staff={staffList}/> : null;
    const spinner = load ? <Spinner/> : null;
    const errors = error ? <Error/> : null;
    return (
        <>
            {spinner}
            {errors}
            {content}
        </>
    ) 
};


const View = ({ movieInfo, trailer, staff }) => {
    const { nameRu, posterUrl, year, description, countries, genres } = movieInfo;

    return (
        <div className={styles.movieInfo}>  
            <div className={styles.containter}>
                <div className={styles.imgBlock}>
                    <img src={posterUrl} alt={nameRu} />
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.info}>
                        <div className={styles.block}>
                            <h1>{nameRu}</h1>
                            <div className={styles.infoMovie}>Жанр: {genres.map((item, i) => (
                                    <p key={i}>&nbsp;{item.genre} |</p>
                                ))}
                            </div>
                            <div className={styles.infoMovie}>
                                Страна: {countries.map((item, i) => (
                                    <p key={i}>&nbsp;{item.country}</p>
                                ))}.
                            </div>
                            <h4>Год: {year}.</h4>
                        </div>
                        <a href={trailer} target="_blank" rel="noreferrer"><h4><FaPlay/>Смотреть трейлер.</h4></a>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <ListStaff staff={staff}/>
            <Link className={styles.link} to='/'><MdArrowBack style={{fontSize: '22px'}}/>К списку фильмов</Link>
        </div>
    );
}

View.propTypes = {
    movieInfo: PropTypes.object,
    trailer: PropTypes.string,
    staff: PropTypes.array
}

export default MovieInfo;
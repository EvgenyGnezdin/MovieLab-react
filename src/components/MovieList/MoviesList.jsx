import PropTypes from 'prop-types'
import MovieListItem from '../MovieListItem/MovieListItem';
import Footer from '../Footer/Footer';
import styles from './MoviesList.module.scss'


const MoviesList = ({ movies, results, setPage, page }) => {

    const movie = results !== null ? results : movies
    return (
        <>
            <div className={styles.movieslist}>
                {movie && movie.map((item, i) => (
                    <MovieListItem  
                        key={i}
                        name={item.nameRu}
                        poster={item.posterUrlPreview || item.posterUrl}
                        rating={item.ratingKinopoisk || item.rating}
                        year={item.year}
                        id={item.kinopoiskId || item.filmId}
                    /> 
                ))}
            </div>  
            <Footer page={page} setPage={setPage}/>
        </>    
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array,
    results: PropTypes.array
}
export default MoviesList;
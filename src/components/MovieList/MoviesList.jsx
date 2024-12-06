import { useSelector } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import styles from './MoviesList.module.scss'

const MoviesList = () => {
    // const { resultsSearch } = useContext(movieList);
    const { topMovie, load, error } = useSelector(state => state.topMovie)
    const { movies, load1, error1 } = useSelector(state => state.searchMovie)
    const movie = movies.length ? movies : topMovie;
    const content = movie !== null ? <View topMovie={movie}/> : null
    const errors = error ? <Error errorMessage={error}/> : null
    const loading = load ? <Spinner/> : null

    
    return (
        <>
            {content}
            {errors}
            {loading}
        </>
    );
};
const View = ({topMovie}) => {
    return (
        <>
            <div className={styles.movieslist}>
                {topMovie.map((item, i) => (
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
            <Footer/>
        </> 
    )
}

export default MoviesList;
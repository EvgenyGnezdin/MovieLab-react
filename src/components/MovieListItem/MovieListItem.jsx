import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import styles from './MovieListItem.module.scss'

const MovieListItem = ({ name, poster, year, rating, id }) => {
    return (
        <Link to={`/${id}`} className={styles.movieListItem}>
            <img alt={name} src={poster}/>
            <div>
                <div className={styles.info}>
                    <p>{year}</p>
                    <p><IoIosStar style={{color: 'gold', marginRight: '5px'}}/> <strong>{rating ? rating : 'Рейтинг не известен.'}</strong></p>
                </div>
                <h4>{name}</h4>
            </div>
        </Link>
    );
};


MovieListItem.propTypes = {
    name: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.any,
    id: PropTypes.number,
    rating: PropTypes.any
}




export default MovieListItem;
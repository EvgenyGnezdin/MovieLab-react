import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth }from '../../hooks/useAuth'
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import PropTypes from 'prop-types'

import styles from  './Header.module.scss'

const Header = ({ toggleSideBar, setTextInput, textInput, handleSearchSubmit }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    return (
        <div className={styles.header}>
            <GiHamburgerMenu className={styles.menuIcons} onClick={toggleSideBar}/>
            <h2>MovieLab</h2>
            <form onSubmit={handleSearchSubmit} style={{display: location.pathname !== '/' || !isAuth  ? 'none' : 'flex'}}>
                <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                <FaSearch type="SUBMIT" className={styles.searchButton}/>
            </form>
            {isAuth ? 
            <div className={styles.authProfile}>
                {email}
                <p onClick={() => dispatch(removeUser())}>Выйти</p>
            </div>  
            : 
            <div>
                <Link className={styles.login} to='/login'>Войти</Link> | <Link className={styles.login} to='/register' >Зарегистрироваться</Link>
            </div>}
        </div>
    );
};

Header.propTypes = {
    toggleSideBar: PropTypes.func,
    setTextInput: PropTypes.func,
    textInput: PropTypes.string,
    handleSearchSubmit: PropTypes.func
}

export default Header;

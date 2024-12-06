import { useLocation, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

import styles from './Form.module.scss'

const Form = ({ handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const name = useLocation()
    return (
        <div className={styles.container}>
            <form type="Submit" className={styles.form}>
                <h3>{name.pathname === '/login' ? 'Войти.' : 'Регистрация.'}</h3>
                <TextField 
                    className={styles.inputs} 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    className={styles.inputs}
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    className={styles.btn} 
                    variant="contained"
                    onClick={() => handleClick(email, password)}
                >
                    {name.pathname == '/login' ? 'Войти.' : 'Зарегистрироваться.'}
                </Button>
            </form>
            {name.pathname === '/login' ? <p>Если у Вас еще нет аккаунта, то пройдите <Link className={styles.link} to="/register">регистрацию</Link>.</p> : <p>Если у Вас уже есть аккаунт, то <Link className={styles.link} to="/login">авторизуйтесь</Link>.</p>}
        </div>
    );
};

export default Form;
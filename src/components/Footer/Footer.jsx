import { useContext } from 'react';
import { movieList } from '../../context';

import styles from './Footer.module.scss'

const Footer = () => {
    const { setPage } = useContext(movieList)

    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.next} onClick={() => setPage(item => ++item)}>Еще фильмы...</p>
            </div>
        </section>
    );
};

export default Footer;
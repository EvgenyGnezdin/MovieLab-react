import styles from './Footer.module.scss'

const Footer = ({ setPage }) => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.next} onClick={() => setPage(item => ++item)}>Еще фильмы...</div>
            </div>
        </div>
    );
};

export default Footer;
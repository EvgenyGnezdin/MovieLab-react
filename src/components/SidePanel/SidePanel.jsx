import styles from './SidePanel.module.scss';
import { TfiClose } from "react-icons/tfi";


const SidePanel = ({showSideBar, toggleSideBar}) => {

    return (
        <nav className={styles.sidepanel} style={{left : showSideBar ? '0' : '-100%'}}>
            <TfiClose className={styles.close} onClick={toggleSideBar}/>
            <ul>
                
            </ul>
        </nav>
    );
};

export default SidePanel;
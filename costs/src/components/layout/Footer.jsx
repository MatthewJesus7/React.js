import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return(
         <footer className={styles.footer}>
            <ul className={styles.social_list}><li><FaGithub></FaGithub></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>              
            </ul>
            <p className={styles.copyright}><span>Costs</span> &copy; 2024</p>
         </footer>
    )
}

export default Footer
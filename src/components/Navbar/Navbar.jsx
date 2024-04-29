import { Link } from 'react-router-dom';
import { googleOAuthLogin, signOutGoogle } from "../../helpers/firebase"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const ACCESS_TOKEN = localStorage.getItem("accessToken")

  return (
  <nav id={styles.nav}>
    <Link
    className={styles.link}
    id={styles.title}
    to="/"> 
    CAFÉ LOCO
    </Link>

      <ul 
      id={styles.list}>
        
        <Link 
        className={`${styles.link} ${styles.navItem}`}
        to="/">Home
        </Link>
        <Link 
        className={`${styles.link} ${styles.navItem}`}
        to="/coffee-ranking">Ranking
        </Link>
        <Link 
        className={`${styles.link} ${styles.navItem}`}
        to="/submit-coffee">Submit
        </Link>

        {!ACCESS_TOKEN ? 
        <div
        id={styles.authButton}
        className={styles.navItem}
        onClick={googleOAuthLogin}
        >
          Login
        </div>
        :
        <div
        id={styles.authButton}
        className={styles.navItem}
        onClick={signOutGoogle}
        >
          Logout
          </div>
        }
        </ul>
  </nav>
  )
}

export default Navbar;
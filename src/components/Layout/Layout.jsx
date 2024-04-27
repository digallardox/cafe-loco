import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from 'react-helmet';
import styles from "./Layout.module.css"


export const Layout = ({children}) => {
    return (
        <>
    <Helmet>
			<title>Cafe Loco</title>
			</Helmet>
			<Navbar />
            <div id={styles.layout}>
            { children }
            </div>
            {/* <Footer /> */}
            </>
    )
}
import { Link } from 'react-router-dom'

function Footer(){
    return (
        <footer>
            <h5 id="footerText">Cafe Loco © 2021</h5>
            <div id="footerLinks">
            <Link to='/'>Home</Link>
            <Link to='/coffee'>Coffee</Link>
            <Link to='/rank'>Ranking</Link>
            <Link to='/add'>Add Coffee</Link>
            </div>
            <p>Designed and Built by Diego Gallardo</p>
        </footer>
    )
}

export default Footer;
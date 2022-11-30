import logo from '../Source/logo.svg'
import './Navbar.css'


export default function Navbar() {
    return(
        <div className = 'navbar'>
            <div className='nav-img'>
                <img className='logo-img' src={logo} alt="RadekCabajLogo"></img>
            </div>
            <div className='nav-text'>
                <h3>Portfolio</h3>
                <h3>Kompetencje</h3>
                <h3>O mnie</h3>
                <h3>Kontakt</h3>
            </div>
        </div>
    )
}
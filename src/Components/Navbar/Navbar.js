import logo from '../../Source/logo.svg'
import './Navbar.css'
import { Link } from "react-router-dom"


export default function Navbar() {
    
    return(
        <div className = 'navbar'>
            <div className='nav-img'>
            <Link to={'/'}><img className='logo-img' src={logo} alt="RadekCabajLogo"></img></Link> 
            </div>
            <div className='nav-text'>
                <Link className='clean-text' to={'portfolio'}><h3 >Portfolio</h3></Link>
                <Link className='clean-text' to={'competence'}><h3 >Kompetencje</h3></Link>
                <Link className='clean-text' to={'about'}><h3 >O mnie</h3></Link>
                <Link className='clean-text' to={'contact'}><h3 >Kontakt</h3></Link>
            </div>
        </div>
    )
}


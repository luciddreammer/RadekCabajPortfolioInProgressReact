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
                <Link className='clean-text' to={'portfolio'}><p className='h3-weight'>Portfolio</p></Link>
                <Link className='clean-text' to={'competence'}><p className='h3-weight' >Kompetencje</p></Link>
                <Link className='clean-text' to={'about'}><p className='h3-weight' >O mnie</p></Link>
                <Link className='clean-text' to={'contact'}><p className='h3-weight' >Kontakt</p></Link>
            </div>
        </div>
    )
}


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
                <Link className='clean-text' to={'portfolio'}><h3 className='h3-weight'>Portfolio</h3></Link>
                <Link className='clean-text' to={'competence'}><h3 className='h3-weight' >Kompetencje</h3></Link>
                <Link className='clean-text' to={'about'}><h3 className='h3-weight' >O mnie</h3></Link>
                <Link className='clean-text' to={'contact'}><h3 className='h3-weight' >Kontakt</h3></Link>
            </div>
        </div>
    )
}


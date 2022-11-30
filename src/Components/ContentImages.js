import exampleImg from '../Source/solvent.png'
import './ContentImages.css'


export default function ContentImages()
{
    return(
        <div className="img-container">
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
            <img className='single-img-in-container' src={exampleImg} alt="sth"></img>
        </div>
    )
}
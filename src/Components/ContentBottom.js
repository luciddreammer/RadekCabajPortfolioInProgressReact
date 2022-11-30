import './ContentBottom.css'
import IAmDoing from './IAmDoing'
import arrow from '../Source/strzalka_nawigacja.svg'



export default function ContentBottom()
{
    return(
        <div>
           <div className='arrow-button'>
                <h3 className='more-projects'>WIĘCEJ PROJEKTÓW</h3>
                <img className="arrow" src={arrow} alt="sth"></img>
            </div>
            <div className='text-content-bottom'>
                <div className='left-text-content-bottom'>
                    <h1>Kompetencje</h1>
                    <h3 className='left-small-text-content-bottom'>
                        Projektuję systemy identyfikacji wizualnej oraz strony internetowe, głównie dla małych firm oraz osób prywatnych. Oferuję kompleksową obsługę każdego klienta nie tylko w procesie kreacyjnym ale również
                        przy pracach wdrożeniowych.</h3>
                </div>
                <div className='right-text-content-bottom'>
                    <h3 className='what-i-am-doing-text'>czym się zajmuję:</h3>
                    <IAmDoing/>
                </div>
            </div>
            <div className='arrow-button-second'>
                <h3 className='more-projects-second'>DOWIEDZ SIĘ WIĘCEJ</h3>
                <img className="arrow-second" src={arrow} alt="sth"></img>
            </div>
        </div>
    )
}
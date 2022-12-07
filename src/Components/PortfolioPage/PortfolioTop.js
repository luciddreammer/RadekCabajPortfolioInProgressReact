import './PortfolioContent.css'
import SingleRectangle from "./SingleRectangle"




export default function PortfolioTop()
{
    return(
        <div>
            <h1>Oferowane usługi</h1>
            <h3 className='offer-description'>Słucham, analizuję i projektuję. Elastycznie podchodzę do każdego projektu dostarczając rozwiązanie spełniające wymagania rynku oraz dopasowane do potrzeb klienta. Podstawą mojej współpracy jest komunikacja - dzięki niej można określić kontekst projektu, potrzebę klienta oraz efektywnie rozwiązać problem.</h3>
            <div className="rectangles">
                <SingleRectangle/>
                <SingleRectangle/>
                <SingleRectangle/>
                <SingleRectangle/>
            </div>
        </div>
    )
}
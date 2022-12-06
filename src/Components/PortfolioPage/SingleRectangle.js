import RectangleText from './RectangleText'
import './PortfolioContent.css'


export default function SingleRectangle()
{
    return(
        <div className="single-rectangle">
                    <h2 className="rectangle-title">IDENTYFIKACJA<br/> WIZUALNA</h2>
                    <RectangleText
                    text = "logo"/>
                    <RectangleText
                    text = "logo"/>
                    <RectangleText
                    text = "logo"/>
                    <RectangleText
                    text = "logo"/>
                    <RectangleText
                    text = "logo"/>
        </div>
    )
}
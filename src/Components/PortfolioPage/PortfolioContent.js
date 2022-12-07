import './PortfolioContent.css'
import PortfolioTop from './PortfolioTop';
import PortfolioSplitLine from './PortfolioSplitLine';
import PortfolioBottom from './PortfolioBottom';

export default function PortfolioContent()
{
    return(
        <div>
            <PortfolioTop/>
            <PortfolioSplitLine/>
            <PortfolioBottom/>
        </div>
    )
}
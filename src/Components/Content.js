import './Content.css'
import ContentText from './ContentText'
import ContentImages from './ContentImages'
import ContentBottom from './ContentBottom'


export default function Content()
{
    return(
        <div>
            <ContentText/>
            <ContentImages/>
            <ContentBottom/>
        </div>
    )
}
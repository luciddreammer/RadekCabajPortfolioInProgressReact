import '../Content.css'
import ContentText from '../IndexPage/ContentText'
import ContentImages from '../IndexPage/ContentImages'
import ContentBottom from '../IndexPage/ContentBottom'

export default function IndexContent()
{
    return(
        <div className='all-content'>
            <div id='index-page'>
                <ContentText/>
                <ContentImages/>
                <ContentBottom/>
            </div>
        </div>
    )
}
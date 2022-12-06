import smallArrow from '../../Source/strzalka_mala.svg'

export default function RectangleText({text})
{
    return(
        <div className='text-with-arrow'>
            <img className='small-arrow' src={smallArrow} alt="sth"></img>
            <p className='rectangle-size'>{text}</p>
        </div>
    )
}
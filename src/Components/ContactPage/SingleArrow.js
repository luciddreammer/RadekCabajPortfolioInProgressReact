import smallArrow from '../../Source/strzalka_mala.svg'

export default function SingleArrow({text})
{
    return(
        <div className='text-with-arrow'>
            <img className='small-arrow' src={smallArrow} alt="sth"></img>
            <p className='single-arrow'>{text}</p>
        </div>
    )
}
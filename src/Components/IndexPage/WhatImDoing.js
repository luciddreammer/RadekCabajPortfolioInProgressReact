import smallArrow from '../../Source/strzalka_mala.svg'

export default function WhatImDoing({text})
{
    return(
        <div className='text-with-arrow'>
            <img className='small-arrow' src={smallArrow} alt="sth"></img>
            <p className='p-imdoing'>{text}</p>
        </div>
    )
}
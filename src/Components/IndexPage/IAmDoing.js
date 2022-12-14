import WhatImDoing from './WhatImDoing'


export default function IAmDoing()
{
    return(
        <div className='i-am-doing'>
                        <div className='i-am-doing-right'>
                            <WhatImDoing 
                            text = "znak graficzny - logo"
                            />
                            <WhatImDoing 
                            text = "identyfikacja wizualna"
                            />
                            <WhatImDoing 
                            text = "redesign"
                            />
                            <WhatImDoing 
                            text = "księga znaku"
                            />
                            <WhatImDoing 
                            text = "katalogi, publikacje"
                            />
                        </div>
                        <div className='i-am-doing-left'>
                            <WhatImDoing 
                            text = "web design"
                            />
                            <WhatImDoing 
                            text = "wdrożenia stron"
                            />
                            <WhatImDoing 
                            text = "typografia"
                            />
                            <WhatImDoing 
                            text = "stała obsługa graficzna"
                            />
                            <WhatImDoing 
                            text = "materiały drukowane"
                            />
                        </div>
                    </div>
    )
}
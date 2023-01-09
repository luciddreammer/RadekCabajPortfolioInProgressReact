import './ContactPage.css'
import SingleArrow from './SingleArrow'


export default function ContactLeft()
{
    return(
        <div className="contact-left">
            <h1 className="lets-meet">Poznajmy się!</h1>
            <h3 className='imopen'>Jestem otwarty na nowe projekty oraz współpracę. Zachęcam też do kontaktu w celu konsultacji wszelkich pomysłów oraz istniejących już projektów.
            </h3>
            <h3 className='imopen'>
            Napisz wiadomość a ja postaram się skontaktować
            z Tobą jak najszybciej!
            </h3>
            <div className="left-flex">
                <div>
                    <h3 className='contact-social-media'>kontakt</h3>
                    <SingleArrow 
                    text = "cabajradek@gmail.com"
                    />
                    <SingleArrow 
                    text = "(+48) 783 647 943"
                    />

                </div>
                <div className='right-element'>
                    <h3 className='contact-social-media'>social media</h3>
                    <div className='smaller-font'>
                    <SingleArrow 
                    text = "instagram"
                    />
                    <SingleArrow 
                    text = "behance"
                    />
                    <SingleArrow 
                    text = "facebook"
                    />
                    </div>
                </div>

            </div>
        </div>
    )
}
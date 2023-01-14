
import './ContactPage.css'

export default function ContactRight()
{
    return(
        <div className="contact-right">
            <div id="forms">
                <div className='form-text-main'> Formularz kontaktowy</div>
                    <form action="https://formsubmit.co/luciddreammer@gmail.com" method="POST" >
                        <textarea className='contact-form' type="text" name="name"  id="single-form" placeholder="Twoje imię..."></textarea><br></br>
                        <textarea className='contact-form' type="text" name="email" id="single-form" placeholder="Twój adres e-mail..."></textarea><br></br>
                        <textarea className='contact-form' type="text" name="message" id="single-form-third" placeholder="Treść Twojej wiadomości..."></textarea>
                        <br></br><button type="submit" id="custom-btn">Wyślij</button>
                    </form>
                </div>
        </div>
    )
}

import './ContactPage.css'

export default function ContactRight()
{
    return(
        <div className="contact-right">
            <div id="forms">
                    <form action="https://formsubmit.co/luciddreammer@gmail.com" method="POST" >
                        <div >Name</div>
                        <textarea type="text" name="name"  id="single-form" placeholder="Your name..."></textarea>
                        <div >E-mail</div>
                        <textarea type="text" name="email" id="single-form" placeholder="Your e-mail adress..."></textarea>
                        <div>Message</div>
                        <textarea type="text" name="message" id="single-form-third" placeholder="Your message..."></textarea>
                        <button type="submit" id="custom-btn">SEND</button>
                    </form>
                </div>
        </div>
    )
}
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import './ContactPage.css'

export default function ContactContent()
{
    return(
        <div className="contact-flex">
            <ContactLeft/>
            <ContactRight/>
        </div>
    )
}
import arrow from '../../Source/strzalka_button_biala.svg'
import blackArrow from '../../Source/strzalka_button_czarna.svg'
import './Footer.css'


export default function Footer()
{
    return(
        <div className="footer">
            <div className="inside">
                <div className="txt-first">
                    <p className='h1first'>Potrzebujesz unikalnego wizerunku marki?</p>
                </div>
                <div className="flex-footer">
                    <div className="txt-second">
                        <p>Jestem otwarty na nowe wyzwania! Jeśli chcesz nadać swojej marce charakter poprzez unikalny wizerunek, lub po prostu chcesz porozmawiać o swoim pomyśle - zapraszam do kontaktu oraz niezobowiązującej wyceny projektu.</p>
                    </div>
                    <div className="contact-info">
                        <p className="contact">cabajradek@gmail.com</p>
                        <p className="contactTwo">(+48) 783 647 943</p>
                        <div className="white-line"></div>
                    </div>
                </div>
                <div className="txt-third">
                    <p>Pomogę Ci krok po kroku, tworząc uniklany projekt wysyłający odpowiedni komunikat do klientów.</p>
                </div>
                <div className="arrow-flex">
                    <div></div>
                    <div className='arrow-button-footer'>
                        <h3 className='more-projects-footer'>SKONTAKTUJ SIĘ</h3>
                        <img className="arrow-footer" src={arrow} alt="sth"></img>
                    </div>
                    <div className="return-to-top">
                        <p className='returntotoptext'>Powrót na górę</p>
                        <img alt="sth" onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}} className="square" src={blackArrow} ></img>
                    </div>
                </div>
                <div className="bottom-line">
                </div>
                <div className="split-bottom">
                    <div className="split-bottom-left">
                        <h3>©2022 by Radek Cabaj</h3>
                    </div>
                    <div className="split-bottom-right">
                        <h3>cabajradek@gmail.com</h3>
                        <h3>(+48) 783 647 943</h3>
                        <h3>Instagram</h3>
                        <h3>Behance</h3>
                    </div>

                </div>
                <div className="empty">

                </div>
            </div>
        </div>
    )
}
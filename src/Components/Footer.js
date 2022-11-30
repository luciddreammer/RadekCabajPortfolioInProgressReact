import "./Footer.css"
import arrow from '../Source/strzalka_button_biala.svg'
import blackArrow from '../Source/strzalka_button_czarna.svg'


export default function Footer()
{
    return(
        <div className="footer">
            <div className="inside">
                <div className="txt-first">
                    <h1>Potrzebujesz unikalnego wizerunku marki?</h1>
                </div>
                <div className="flex-footer">
                    <div className="txt-second">
                        <h3>Jestem otwarty na nowe wyzwania! Jeśli chcesz nadać swojej marce charakter poprzez unikalny wizerunek, lub po prostu chcesz porozmawiać o swoim pomyśle - zapraszam do kontaktu oraz niezobowiązującej wyceny projektu.</h3>
                    </div>
                    <div className="contact-info">
                        <h3 className="contact">cabajradek@gmail.com</h3>
                        <h3 className="contact">(+48) 783 647 943</h3>
                        <div className="white-line"></div>
                    </div>
                </div>
                <div className="txt-third">
                    <h3>Pomogę Ci krok po kroku, tworząc uniklany projekt wysyłający odpowiedni komunikat do klientów</h3>
                </div>
                <div className="arrow-flex">
                    <div></div>
                    <div className='arrow-button-footer'>
                        <h3 className='more-projects-footer'>SKONTAKTUJ SIĘ</h3>
                        <img className="arrow-footer" src={arrow} alt="sth"></img>
                    </div>
                    <div className="return-to-top">
                        <h3>Powrót na górę</h3>
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
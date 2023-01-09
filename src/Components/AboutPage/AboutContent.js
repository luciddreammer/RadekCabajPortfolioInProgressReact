import "./AboutContent.css"
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";
import AboutAchievements from "./AboutAchievements";


export default function AboutContent()
{
    return(
        <div className="about-flex">
            <AboutImg/>
            <AboutText/>
            <AboutAchievements/>
        </div>
    )
}
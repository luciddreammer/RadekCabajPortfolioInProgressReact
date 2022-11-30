import Navbar from "./Navbar"
import './App.css'
import Content from "./Content"
import Footer from "./Footer"


export default function App()
{
    return(
        <div className="app">
            <Navbar/>
            <Content/>
        </div>
    )
}
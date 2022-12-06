import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import IndexContent from './IndexPage/IndexContent'
import PortfolioContent from './PortfolioPage/PortfolioContent'
import Navbar from "./Navbar/Navbar";
import CompetenceContent from "./CompetencePage/CompetenceContent";
import AboutContent from "./AboutPage/AboutContent";
import ContactContent from "./ContactPage/ContactContent";

function Page()
{
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
        children: [
            {
                path: "/",
                element: <IndexContent/>
            },
            {
                path: "/portfolio",
                element: <PortfolioContent/>
            },
            {
                path: "/competence",
                element: <CompetenceContent/>
            },
            {
                path: "/about",
                element: <AboutContent/>
            },
            {
                path: "/contact",
                element: <ContactContent/>
            },
        ]
    }
])


export default function Content()
{
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
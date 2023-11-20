import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayount} from "./layounts";
import {CharacterPage, EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayount/>,
        children: [
            {
                index: true,
                element: <Navigate to={'episodes'}/>

            },
            {
                path:'episodes',
                element:<EpisodesPage/>
            },
            {
                path:'characters/:ids',
                element:<CharacterPage/>
            }
]
}
])
export {
    router
}
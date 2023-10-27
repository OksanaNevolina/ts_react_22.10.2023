import {createBrowserRouter, Navigate} from "react-router-dom";

import React from "react";

import {MainComponent} from "./components/MainComponent";
import {PageMain} from "./components/pageMain/PageMain";
import {CarsDeteil} from "./components/CarsDeteil";


const router = createBrowserRouter([
    {
        path:'',
        element:<PageMain/>,
        children:[
            {
                index:true,
                element: <Navigate to={'cars'}/>
            },
            {
                path:'cars',
                element:<MainComponent/>,
                children:[
                    {
                        path:':id',
                        element:<CarsDeteil/>
                    }
                ]
            }
        ]
    }
])
export {
    router
}
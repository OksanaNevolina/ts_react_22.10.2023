import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayount} from "./Layonts/MainLayount";
import {UsersPage} from "./Pages/UsersPage";
import {UserDetailsPage} from "./Pages/UserDetailsPage";

import React from "react";
import PostsPage from "./Pages/PostsPage";
import {PostDedPage} from "./Pages/PostDedPage";
import {PostsService} from "./Services/PostsService";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayount/>,
        children:[
            {
               index:true,
               element:<Navigate to={'users'}/>
            },
            {
                path:'users',
                element:<UsersPage/>

            },
            {
                path:'users/:id',
                element:<UserDetailsPage/>,
                children:[{
                    path:'posts',
                    element:<PostsPage/>
                }]

            },
            {
                path:'users/:id/posts/:postId',
                element:<PostDedPage/>,
                loader:({params:{postId}}) => PostsService.getPosts(+postId)
            }

        ]
    }
])

export {
    router
}
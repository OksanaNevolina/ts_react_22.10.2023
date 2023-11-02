import React from 'react';
import {UserDetails} from "../Components/UserDetails/UserDetails";
import {Outlet} from "react-router-dom";

const UserDetailsPage = () => {
    return (
        <div>
            <UserDetails/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPage
};
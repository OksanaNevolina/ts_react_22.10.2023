import React from 'react';
import css from './PageMain.module.css'
import {Outlet} from "react-router-dom";

const PageMain = () => {
    return (
        <>
            <div className={css.MainPage}>
                Cars
            </div>
            <Outlet/>
        </>

    );
};

export {
    PageMain
};

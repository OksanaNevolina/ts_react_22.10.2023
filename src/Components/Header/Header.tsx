import React from 'react';

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <h2 className={css.Header}>https://jsonplaceholder.typicode.com/</h2>
        </div>
    );
};

export {
    Header
};
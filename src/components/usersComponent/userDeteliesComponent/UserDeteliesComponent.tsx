import React, {FC} from 'react';
import {IUser} from "../../../Interfaces/userInterface";

interface IProps {
    userDet:IUser
}

const UserDeteliesComponent :FC<IProps> = ({userDet}) => {
    const {username,company:{name,bs,catchPhrase}} = userDet;
    return (
        <div>
            <h1>{username}</h1>
            <h2>company</h2>
            <h3>name : {name}</h3>
            <h3>bs : {bs}</h3>
            <h3>catchPhrase : {catchPhrase}</h3>
        </div>
    );
};

export {
    UserDeteliesComponent
} ;
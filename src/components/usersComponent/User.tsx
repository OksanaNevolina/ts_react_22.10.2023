import React, {FC} from 'react';

import {IUser} from "../../Interfaces/userInterface";
import css from './User.module.css'

interface IProps {
    user: IUser,
    show:(id:number)=>Promise<void>

}
const User:FC<IProps> = ({user,show}) => {
    const {id,email,name,phone,website,username} = user;



    return (
        <div className={css.UserMain}>
            <div> id: {id}</div>
            <div> email: {email}</div>
            <div> name: {phone}</div>
            <div> phone: {name}</div>
            <div> website: {website}</div>
            <div> username: {username}</div>
            <button onClick={()=>show(id)}>show</button>
        </div>
    );
};

export default User;
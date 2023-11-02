import React, {FC} from 'react';
import {IUser} from "../../Inrerfaces/UserInterface";

import css from './User.module.css'
import {useNavigate} from "react-router-dom";


interface IProps{
    user:IUser
}
const User:FC<IProps> = ({user}) => {
     const {id,name} = user;

     const navigate = useNavigate();
    return (
        <div className={css.User}>
            <div> id : {id}</div>
            <div>name : {name}</div>
            <button onClick={()=>navigate(id.toString(),{state:user})}>user deteils</button>


        </div>
    );
};

export {
    User
};
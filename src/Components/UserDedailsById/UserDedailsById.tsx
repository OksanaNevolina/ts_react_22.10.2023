import React, {FC} from 'react';
import {IUser} from "../../Inrerfaces/UserInterface";

import css from './UserDedailsById.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
     userDetails:IUser
}
const UserDedailsById:FC<IProps> = ({userDetails}) => {
    const {id, name, website, email, phone} = userDetails;

    const navigate = useNavigate();






    console.log()
    return (
        <div className={css.UserDed}>
          <div>id  : {id}</div>
          <div>name : {name}</div>
          <div>website : {website}</div>
          <div>email : {email}</div>
          <div>phone : {phone}</div>
            <button onClick={()=>navigate('posts')}>post of current user</button>
        </div>
    );
};

export {
    UserDedailsById
};
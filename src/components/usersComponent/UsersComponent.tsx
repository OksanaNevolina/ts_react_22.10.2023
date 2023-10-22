import React, {useEffect, useState} from 'react';
import {IUser} from "../../Interfaces/userInterface";
import {userService} from "../../services/userService";
import User from "./User";
import css from "./UsersComponent.module.css"
import {UserDeteliesComponent} from "./userDeteliesComponent/UserDeteliesComponent";


const UsersComponent = () => {
    const [users,setUsers] = useState<IUser[]>([]);
    const [usersDet,setUsersDet] = useState<IUser>(null);

    const show =  async (userId:number):Promise<void> =>{
        const {data} = await userService.getById(userId)
        setUsersDet(data)

    }

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div className={css.UserCom}>
            {usersDet&& <UserDeteliesComponent userDet={usersDet}/>}
            {users.map(user => <User key={user.id} user={user} show={show}/>)}
        </div>
    );
};

export {
    UsersComponent
} ;
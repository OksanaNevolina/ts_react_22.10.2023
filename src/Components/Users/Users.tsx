import React, {useEffect, useState} from 'react';
import {IUser} from "../../Inrerfaces/UserInterface";
import {UsersService} from "../../Services/UsersService";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        UsersService.getAll().then(({data})=> setUsers(data))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {
    Users
} ;
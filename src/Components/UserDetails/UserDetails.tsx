import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/routerHook";
import {IUser} from "../../Inrerfaces/UserInterface";
import {useParams} from "react-router-dom";
import {UsersService} from "../../Services/UsersService";
import {UserDedailsById} from "../UserDedailsById/UserDedailsById";

const UserDetails = () => {
    const {state} = useAppLocation<IUser>();
    const {id} = useParams();

    const [userDetails,setUserDetails] = useState<IUser>(null);

useEffect(()=>{
    if(state){
        setUserDetails(state)
    }else {
        UsersService.getId(+id).then(({data})=>setUserDetails(data))
    }

},[id,state])

    console.log( userDetails)


    return (
        <div>
            {userDetails&& <UserDedailsById userDetails={userDetails}/>}
        </div>
    );
};


export {
    UserDetails
};
import React, {FC} from 'react';
import {ICharacters} from "../interfaces/charactersInterface";
interface IProps {
    character:ICharacters
}

const Character:FC<IProps> = ({character}) => {
    const {id,gender,name,image,status,created} = character;

    return (
        <div style={{width:300,padding:10,margin:10,fontSize:20,color:"brown",backgroundColor:"aqua"}}>
            <img src={image} alt={name}/>
            <div>id:{id}</div>
            <div>gender:{gender}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>created:{created}</div>
        </div>
    );
};

export {
    Character
};
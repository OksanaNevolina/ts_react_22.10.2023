import React, {FC} from 'react';
import {IResults} from "../interfaces/InterfaceEpisodes";
import {useNavigate} from "react-router-dom";

interface IProps {
    episode:IResults
}
const Episode:FC<IProps> = ({episode}) => {
    const {episode:nameE,name,id,characters,air_date} = episode;

    const navigate = useNavigate();

    const charactersShow = () => {
      const ids = characters.map(value => value.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)

    }
    return (
        <div style={{backgroundColor:"navajowhite",width:200,padding:3,margin:3}}>
           <div>nameE : {nameE}</div>
           <div>name : {name}</div>
           <div>id : {id}</div>
           <div>air_date : {air_date}</div>
            <button
                onClick={charactersShow}
                style={{margin:5,width:150,height:25,backgroundColor:'oldlace'}}>
                show characters
            </button>
        </div>
    );
}

export {
    Episode
}
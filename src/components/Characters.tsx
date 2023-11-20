import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {characterActions} from "../redux";
import {Character} from "./Character";


const Characters = () => {
    const {characters} = useAppSelector(state => state.characters);
    const dispatch= useAppDispatch();
    const {ids} = useParams();
    console.log(ids)
    useEffect(()=>{
        dispatch(characterActions.getByIds({ids}))
    },[ids])
    console.log(characters)

    return (
        <div style={{display:"flex",flexWrap:"wrap", alignItems:'center',justifyContent:"space-between"}}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
}

export {
    Characters
}
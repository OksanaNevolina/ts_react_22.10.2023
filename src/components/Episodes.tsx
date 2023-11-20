import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

import {ActionsEpisodes} from "../redux";
import {Episode} from "./Episode";
interface IProps {
   page: string
}

const Episodes:FC<IProps> = ({page}) => {
    const dispatch = useAppDispatch();
    const {episodes} = useAppSelector(state => state.episodes);



    useEffect(()=>{
        dispatch(ActionsEpisodes.getAll({page}))
    },[page])
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}

        </div>
    );
};

export {
    Episodes
}
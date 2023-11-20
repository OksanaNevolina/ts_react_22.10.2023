import React, {useEffect} from 'react';
import {Episodes, Pagination} from "../components";
import {useSearchParams} from "react-router-dom";

const EpisodesPage = () => {
    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')
    useEffect(()=>{
        if(!page){
            setQuery({page: '1'})
        }

    },[])



    return (
        <div>
            <Episodes page={page}/>
            <Pagination/>
        </div>
    );
};

export {
    EpisodesPage
}
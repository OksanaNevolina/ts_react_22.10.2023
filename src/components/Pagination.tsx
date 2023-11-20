import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHooks";

const Pagination = () => {
    const {next ,prev} = useAppSelector(state => state.episodes);
    console.log(next,prev)
    const [query,setQuery] = useSearchParams();

    const prevPage= () =>{
      setQuery(prev1 => {
         prev1.set('page',(+prev1.get('page')-1).toString())
          return prev1
      })
    }
    const nextPage= () =>{
setQuery(prev1 => {
    prev1.set('page',(+prev1.get('page')+1).toString())
    return prev1
})
    }

    return (
        <div>
            <button disabled={!prev}  onClick={prevPage}>prev</button >
            <button  disabled={!next} onClick={nextPage}>next</button >
        </div>
    );
};

export {Pagination}
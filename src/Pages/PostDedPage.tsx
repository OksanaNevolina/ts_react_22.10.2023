import React from 'react';
import {useLoaderData} from "react-router-dom";
import {IPost} from "../Inrerfaces/PostInterface";

const PostDedPage = () => {
    const {data} = useLoaderData();
    const {body,id} = data;
    return (
        <div>
            <div>{body}</div>
            <div>{id}</div>
        </div>
    );
};

export {PostDedPage};
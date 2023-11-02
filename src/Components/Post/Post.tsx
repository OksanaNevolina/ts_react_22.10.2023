import React, {FC} from 'react';
import {IPost} from "../../Inrerfaces/PostInterface";
import {useNavigate} from "react-router-dom";

interface IProps {
    post:IPost
}

const Post:FC<IProps> = ({post}) => {
    const {id,title } = post;
    const navigate= useNavigate();

    return (
        <div>
            <div>title post : {title}</div>
            <button onClick={()=>navigate(`${id}`)} >post details</button>
        </div>
    );
};

export {
    Post
};
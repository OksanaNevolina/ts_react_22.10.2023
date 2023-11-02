import React, {useEffect, useState} from 'react';
import {IPost} from "../Inrerfaces/PostInterface";
import {useParams} from "react-router-dom";
import {PostsService} from "../Services/PostsService";
import {Post} from "../Components/Post/Post";


const PostsPage = () => {


    const {id} = useParams();
    console.log(id)

    const [posts,setPosts] = useState<IPost[]>([]);

    useEffect(() => {
       PostsService.getPostId(+id).then(({data })=>setPosts(data))

    }, [id])
    console.log(posts)
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsPage;
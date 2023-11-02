import {apiService, IRes} from "./apiService";
import {ulsl} from "../Consants/urls";
import {IPost} from "../Inrerfaces/PostInterface";

const PostsService = {
    getPosts: (postId:number): IRes<IPost> => apiService.get(ulsl.posts.getUserId(postId)),
    getPostId: (userId: number): IRes<IPost[]> => apiService.get(ulsl.posts.basePosts,{params:{userId}})
}
export {
    PostsService
}
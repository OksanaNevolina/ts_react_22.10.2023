import {IComment} from "../Inrerfaces/CommentInterface";
import {apiService, IRes} from "./apiService";
import {ulsl} from "../Consants/urls";

const CommentService ={
    getCommentPostId:(postId:number):IRes<IComment> => apiService.get(ulsl.comments,{params:{postId}})
}
export {
    CommentService
}
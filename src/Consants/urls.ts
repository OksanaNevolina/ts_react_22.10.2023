const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const comments = '/comments'


const ulsl = {
    users:{
        base:users,
        getById : (id:number): string =>`${users}/${id}`
    },
    posts:{
        basePosts: posts,
       getUserId:(userId:number): string=>`${posts}/${userId}`
    },
    comments

}

export {
    baseURL,
    ulsl
}
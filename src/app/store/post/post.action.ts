import { Action } from "src/app/@types";

export enum PostActionEnum {
    GET_POSTS = "getPost",
    GET_POSTS_SUCCESS = "getPostSuccess",
    ADD_POST = "addPost",
    DELETE_POST = "deletePost",
    UPDATE_POST = "updatePost"
}

export class GetPosts implements Action {
    readonly type = PostActionEnum.GET_POSTS
    constructor() {}
}

export class GetPostsSuccess implements Action {
    readonly type = PostActionEnum.GET_POSTS_SUCCESS;
    constructor(
        public payload: any
    ) {}
}

export class AddPost implements Action {
    readonly type = PostActionEnum.ADD_POST
    constructor(
        public payload: any
    ) {}
}

export type PostActions = GetPosts | AddPost | GetPostsSuccess ;

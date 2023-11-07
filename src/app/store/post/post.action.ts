import { Action } from "src/app/@types";

export enum PostEnum {
    GET_POSTS = "getPost",
    ADD_POST = "addPost",
    DELETE_POST = "deletePost",
    UPDATE_POST = "updatePost"
}

export class GetPosts implements Action {
    readonly type = PostEnum.GET_POSTS
}

export class AddPost implements Action {
    readonly type = PostEnum.ADD_POST
    constructor(
        public payload: any
    ) {}
}

export type PostActions = GetPosts | AddPost ;

import { createReducer, on } from "@ngrx/store";
import { IPostInitialState } from "../../@types";
import { postAdd, postDelete, postList } from "../actions/post.action";

const initialState: IPostInitialState = {
    posts: [
        {
            id: 1,
            title: 'Blog 1',
            description: 'Blog 1 desc'
        },
        {
            id: 2,
            title: 'Blog 2',
            description: 'Blog 2 desc'
        }
    ]
}

const _PostReducer = createReducer(
    initialState,
    on(postList, (state) => {
        return {
            ...state
        }
    }),
    on(postAdd, (state, action) => {
        return {
            ...state
        }
    }),
    on(postDelete, (state) => {
        return {
            ...state
        }
    })
)

export const PostReducer = (state: any, action: any) => {
    return _PostReducer(state, action);
}
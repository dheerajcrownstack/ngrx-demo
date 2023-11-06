import { createReducer, on } from "@ngrx/store";
import { IPostInitialState } from "../../@types";

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
)

export const PostReducer = (state: any, action: any) => {
    return _PostReducer(state, action);
}